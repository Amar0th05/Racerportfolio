import React from "react";
import { motion } from "framer-motion";

const data = [
  {
    SNO: 1,
    DATA: "DEC 2020",
    EVENT: "NATIONAL ONE MAKE CHAMPIONSHIP OMC 2020",
    CATEGORY: "APACHE-RTR 200CC",
    VENUE: "MMRT",
    POSITION: "POLE POSITION(1st)",
    RESULT: "RACE 1:WINNER",
  },
  {
    SNO: 2,
    DATA: "DEC 2020",
    EVENT: "NATIONAL OMC 2020",
    CATEGORY: "RTR 200CC",
    VENUE: "MMRT",
    POSITION: "POLE POSITION(1st)",
    RESULT: "RACE 2:WINNER",
  },
  {
    SNO: 3,
    DATA: "DEC 2020",
    EVENT: "NATIONAL OMC 2020",
    CATEGORY: "RTR 200CC",
    VENUE: "MMRT",
    POSITION: "POLE POSITION(1st)",
    RESULT: "RACE 3:WINNER",
  },
  {
    SNO: 4,
    DATA: "DEC 2020",
    EVENT: "NATIONAL OMC 2020",
    CATEGORY: "RTR 200CC",
    VENUE: "MMRT",
    POSITION: "POLE POSITION(1st)",
    RESULT: "RACE 4:WINNER",
  },
  {
    SNO: 5,
    DATA: "DEC 2020",
    EVENT: "NATIONAL OMC 2020",
    CATEGORY: "RTR 200CC",
    VENUE: "MMRT",
    POSITION: "POLE POSITION(1st)",
    RESULT: "RACE 5:DNF",
  },
  {
    SNO: 6,
    DATA: "DEC 2020",
    EVENT: "NATIONAL OMC 2020",
    CATEGORY: "RTR 200CC",
    VENUE: "MMRT",
    POSITION: "3rd POSITION",
    RESULT: "RACE 6:5th PLACE",
  },
  {
    SNO: 7,
    DATA: "DEC 2020",
    EVENT: "NATIONAL OMC 2020",
    CATEGORY: "RTR 200CC",
    VENUE: "MMRT",
    POSITION: "5th POSITION",
    RESULT: "RACE 7:2nd RUNNER UP",
  },
  {
    SNO: 8,
    DATA: "DEC 2020",
    EVENT: "OMC 2020",
    CATEGORY: "RTR 200CC",
    VENUE: "MMRT",
    POSITION: "3rd POSITION",
    RESULT: "RACE 8:WINNER TITLE WINNER NATIONAL CHAMPION OF 2020",
  },
  {
    SNO: 9,
    DATA: "DEC 2020",
    EVENT: "INDIAN NATIONAL MOTORCYCLE RACING CHAMPIONSHIP 2020",
    CATEGORY: "STOCK UPTO 165CC",
    VENUE: "MMRT",
    POSITION: "5th POSITION",
    RESULT: "RACE 7:WINNER",
  },
  {
    SNO: 10,
    DATA: "DEC 2020",
    EVENT:
      "MMSC FMSCI INDIAN NATIONAL MOTORCYCLE RACING CHAMPTIONSHIP 2020(INMRC)",
    CATEGORY: "STOCK UPTO 165CC",
    VENUE: "MMRT",
    POSITION: "POLE POSITION(1st)",
    RESULT: "RACE 8:5th WINNER OVERALL RESULT - NATIONAL CHAMPTIONSHIP-4th",
  },
  {
    SNO: 11,
    DATA: "MARCH 2021",
    EVENT: "ENDURANCE RACE 2021",
    CATEGORY: "PROSTOCK 301-400CC EXPERT CLASS",
    VENUE: "MMRT",
    POSITION: "3rd POSITION",
    RESULT: "WINNER AND OVERALL CHAMPION",
  },
  {
    SNO: 12,
    DATA: "SEPT 2021",
    EVENT: "NATIONAL OMC EXPERT CLASS 2021",
    CATEGORY: "TVS RR 310",
    VENUE: "MMRT",
    POSITION: "POLE POSITION(1st)",
    RESULT: "RACE 3:WINNER",
  },
  {
    SNO: 13,
    DATA: "SEPT 2021",
    EVENT: "NATIONAL OMC EXPERT CLASS 2021",
    CATEGORY: "TVS RR310",
    VENUE: "MMRT",
    POSITION: "POLE POSITION(1st)",
    RESULT: "RACE 4: RUNNER UP",
  },
  {
    SNO: 14,
    DATA: "OCT 2021",
    EVENT: "NATIONAL OMC EXPERT CLASS 2021",
    CATEGORY: "TVS RR310",
    VENUE: "MMRT",
    POSITION: "POLE POSITION(1st)",
    RESULT: "RACE 5: 2nd RUNNER UP",
  },
  {
    SNO: 15,
    DATA: "OCT 2021",
    EVENT: "NATIONAL OMC EXPERT CLASS 2021",
    CATEGORY: "TVS RR310",
    VENUE: "MMRT",
    POSITION: "POLE POSITION(1st)",
    RESULT: "RACE 6: RUNNER UP",
  },
  {
    SNO: 16,
    DATA: "FEB 2022",
    EVENT: "NATIONAL OMC EXPERT CLASS 2021",
    CATEGORY: "TVS RR310",
    VENUE: "MMRT",
    POSITION: "POLE POSITION(1st)",
    RESULT: "RACE 9: RUNNER UP",
  },
  {
    SNO: 17,
    DATA: "JUNE 2022",
    EVENT: "NATIONAL OMC EXPERT CLASS 2022",
    CATEGORY: "TVS RR310",
    VENUE: "KARI MOTOR COIMBATORE",
    POSITION: "POLE POSITION(1st)",
    RESULT: "RACE 1: 2nd RUNNER UP",
  },
  {
    SNO: 18,
    DATA: "SEPT 2022",
    EVENT: "ROYAL ENFIELD GT CUP",
    CATEGORY: "Professional category GT 650cc",
    VENUE: "KARI MOTOR COIMBATORE",
    POSITION: "2nd POSITION",
    RESULT: "RACE 2: WINNER",
  },
  {
    SNO: 19,
    DATA: "OCT 2022",
    EVENT: "ROYAL ENFIELD GT CUP",
    CATEGORY: "Professional category GT 650cc",
    VENUE: "KARI MOTOR COIMBATORE",
    POSITION: "POLE POSITION(1st)",
    RESULT: "RACE 1: RUNNER UP",
  },
  {
    SNO: 20,
    DATA: "OCT 2022",
    EVENT: "ROYAL ENFIELD GT CUP",
    CATEGORY: "Professional category GT 650cc",
    VENUE: "KARI MOTOR COIMBATORE",
    POSITION: "POLE POSITION(1st)",
    RESULT: "RACE 2: WINNER",
  },
  {
    SNO: 21,
    DATA: "MAR 2023",
    EVENT: "KTM RC CUP 2023",
    CATEGORY: "RC 390",
    VENUE: "MMRT",
    POSITION: "POLE POSITION(1st)",
    RESULT: "RACE 1: WINNER",
  },
  {
    SNO: 22,
    DATA: "MAR 2023",
    EVENT: "KTM RC CUP 2023",
    CATEGORY: "RC 390",
    VENUE: "MMRT",
    POSITION: "POLE POSITION(1st)",
    RESULT: "RACE 2: 2nd RUNNER UP",
  },
  {
    SNO: 23,
    DATA: "MAR 2023",
    EVENT: "KTM RC CUP 2023",
    CATEGORY: "RC 390",
    VENUE: "MMRT",
    POSITION: "POLE POSITION(1st)",
    RESULT:
      "RACE 3: WINNER Sealed the championship 'National RC CUP champion-2023'",
  },
  {
    SNO: 24,
    DATA: "AUG 2023",
    EVENT: "BRIC Superbike 2023",
    CATEGORY: "400cc",
    VENUE: "CHANG International Circuit",
    POSITION: "RACE 3 POINT POSITION: 10",
    RESULT: "TOTAL POINTS: 9",
  },
  {
    SNO: 25,
    DATA: "APRL 2024",
    EVENT: "INDIA's ULTIMATE MOTSTAR-CASTROL POWER 1",
    CATEGORY: "UPTO 165cc",
    VENUE: "KMS",
    POSITION: "7th POSITION",
    RESULT: "RACE 3:5th WINNER",
  },
  {
    SNO: 26,
    DATA: "JUNE 2024",
    EVENT: "INDIAN NATIONAL MOTORCYCLE RACING CHAMPIONSHIP",
    CATEGORY: "OPEN CLASS 301-400CC",
    VENUE: "MMRT",
    POSITION: "16th POSITION",
    RESULT: "RACE 2:4th WINNER",
  },
  {
    SNO: 27,
    DATA: "JULY 2024",
    EVENT: "INDIAN NATIONAL MOTORCYCLE RACING CHAMPIONSHIP",
    CATEGORY: "OPEN CLASS 301-400CC",
    VENUE: "MMRT",
    POSITION: "8th POSITION",
    RESULT: "RACE 2:5th WINNER",
  },
  {
    SNO: 28,
    DATA: "AUG 2024",
    EVENT: "ROYAL ENFIELD GT CUP 2024",
    CATEGORY: "EXPERT CLASS UPTO 650CC",
    VENUE: "MMRT",
    POSITION: "4th POSITION",
    RESULT: "Race1: Winner",
  },
  {
    SNO: 29,
    DATA: "AUG 2024",
    EVENT: "ROYAL ENFIELD GT CUP 2024",
    CATEGORY: "EXPERT CLASS UPTO 650CC",
    VENUE: "MMRT",
    POSITION: "2nd POSITION",
    RESULT: "RACE 2:WINNER",
  },
  {
    SNO: 30,
    DATA: "OCT 2024",
    EVENT: "ROYAL ENFIELD GT CUP 2024",
    CATEGORY: "EXPERT CLASS UPTO 650CC",
    VENUE: "KMS",
    POSITION: "2nd POSITION",
    RESULT: "RACE 3:WINNER",
  },
  {
    SNO: 31,
    DATA: "OCT 2024",
    EVENT: "ROYAL ENFIELD GT CUP 2024",
    CATEGORY: "EXPERT CLASS UPTO 650CC",
    VENUE: "KMS",
    POSITION: "2nd POSITION",
    RESULT: "RACE 4:2nd RUNNER",
  },
  {
    SNO: 32,
    DATA: "NOV 2024",
    EVENT: "ROYAL ENFIELD GT CUP 2024",
    CATEGORY: "EXPERT CLASS UPTO 650CC",
    VENUE: "KMS",
    POSITION: "3rd POSITION",
    RESULT: "RACE 5:WINNER",
  },
  {
    SNO: 33,
    DATA: "NOV 2024",
    EVENT: "ROYAL ENFIELD GT CUP 2024",
    CATEGORY: "EXPERT CLASS UPTO 650CC",
    VENUE: "KMS",
    POSITION: "2nd POSITION",
    RESULT: "RACE 6:RUNNER UP",
  },
  {
    SNO: 34,
    DATA: "NOV 2024",
    EVENT: "ROYAL ENFIELD GT CUP 2024",
    CATEGORY: "EXPERT CLASS UPTO 650CC",
    VENUE: "KMS",
    POSITION: "POLE POSITION",
    RESULT: "RACE 7:WINNER",
  },
];

const Table = () => {
  return (
    <div className="overflow-x-auto p-4 w-full">
      <div className="min-w-[600px] md:min-w-full rounded-xl overflow-hidden shadow-md">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-red-600 text-white text-xs sm:text-sm">
              <th className="p-2 sm:p-3 border border-gray-300">S.NO</th>
              <th className="p-2 sm:p-3 border border-gray-300">DATE</th>
              <th className="p-2 sm:p-3 border border-gray-300">EVENT</th>
              <th className="p-2 sm:p-3 border border-gray-300">CATEGORY</th>
              <th className="p-2 sm:p-3 border border-gray-300">VENUE</th>
              <th className="p-2 sm:p-3 border border-gray-300">QUALIFYING</th>
              <th className="p-2 sm:p-3 border border-gray-300">RESULT</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <motion.tr
                key={index}
                className="bg-gray-900 bg-opacity-60 text-white text-xs sm:text-sm hover:bg-opacity-80 transition duration-200"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
              >
                <td className="p-2 sm:p-3 border border-gray-700 text-center">
                  {item.SNO}
                </td>
                <td className="p-2 sm:p-3 border border-gray-700 text-center">
                  {item.DATA}
                </td>
                <td className="p-2 sm:p-3 border border-gray-700">
                  {item.EVENT}
                </td>
                <td className="p-2 sm:p-3 border border-gray-700 text-center">
                  {item.CATEGORY}
                </td>
                <td className="p-2 sm:p-3 border border-gray-700 text-center">
                  {item.VENUE}
                </td>
                <td className="p-2 sm:p-3 border border-gray-700 text-center">
                  {item.POSITION}
                </td>
                <td className="p-2 sm:p-3 border border-gray-700 text-center">
                  {item.RESULT}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
