import { useEffect, useRef, useState } from "react";
import { getAllMasterDictionaries } from "../api/masterDictionaryApi";
import { decryptData } from "../utils/decrypt";

const MasterData = () => {
  const [data, setData] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const hasFetched = useRef(false);

  // ✅ COLUMNS
  const columns = [
    // { key: "masterDictionaryId", label: "ID" },
    { key: "key", label: "Key" },
    { key: "value", label: "Value" },
    { key: "geo", label: "Geo" },
    { key: "company", label: "Company" },
    { key: "department", label: "Department" },
    { key: "subProcess", label: "Sub Process" },
    { key: "isActive", label: "Active" },
    { key: "createdDate", label: "Created Date" },
  ];

  // ✅ FORMAT VALUE (ONLY DATE FOR createdDate)
  const formatValue = (key: string, value: any) => {
    if (!value) return "-";

    if (key === "createdDate") {
      return new Date(value).toLocaleDateString("en-GB"); // DD/MM/YYYY
    }

    return String(value);
  };

  const fetchData = async () => {
    try {
      const res = await getAllMasterDictionaries();

      if (res?.status && res?.data) {
        let decrypted = decryptData(res.data);

        if (typeof decrypted === "string") {
          decrypted = JSON.parse(decrypted);
        }

        if (Array.isArray(decrypted)) {
          setData(decrypted);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (hasFetched.current) return;

    hasFetched.current = true;
    fetchData();
  }, []);

  // 🔍 SEARCH
  const filteredData = data.filter((row) =>
    columns.some((col) =>
      String(row?.[col.key] ?? "")
        .toLowerCase()
        .includes(search.toLowerCase())
    )
  );

  return (
    <div className="p-4">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
        <h2 className="text-xl font-bold">Master Data</h2>

        <input
          type="text"
          placeholder="Search..."
          className="border px-3 py-2 rounded w-full md:w-72"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* TABLE */}
      <div className="bg-white shadow rounded overflow-x-auto">

        <table className="min-w-full border">

          {/* HEADER */}
          <thead className="bg-gray-100">
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="text-left px-4 py-2 border-b text-sm font-semibold"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  {columns.map((col) => (
                    <td key={col.key} className="px-4 py-2 border-b text-sm">
                      {formatValue(col.key, row?.[col.key])}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="text-center py-6 text-gray-500"
                >
                  No data found
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default MasterData;