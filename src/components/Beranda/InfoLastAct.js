import React from "react";
import "../../style/InfoLastAct.css";

const InfoLastAct = () => {
    return (
        <div className="lastact-box">
            <h3 className="title-lastact-box"> LATEST ACTIVITY PROGRESS</h3>
            <table className="table-lastact-box">
                <tr className="tr-lastact-box">
                    <th className="th-title-table-lastact-box">Name Task</th>
                    <th className="th-title-table-lastact-box">Activity</th>
                    <th className="th-title-table-lastact-box">Date and Time</th>
                </tr>
                <tr className="tr-content-lastact-box">
                    <td className="name-task">
                        <span className="name-task2">Task 98</span>
                    </td>
                    <td className="activity-task">Menyelesaikan Bab 1 Skripsi</td>
                    <td className="date-time-task">22/09/2022 14.00 WIB</td>
                </tr>

                <tr className="tr-content-lastact-box">
                    <td className="name-task">
                        <span className="name-task2">Task 99</span>
                    </td>
                    <td className="activity-task">Menyelesaikan Submission 1</td>
                    <td className="date-time-task">22/09/2022 20.49 WIB</td>
                </tr>

                <tr className="tr-content-lastact-box">
                    <td className="name-task">
                        <span className="name-task2">Task 111</span>
                    </td>
                    <td className="activity-task">Mengerjakan PPT Android Programming</td>
                    <td className="date-time-task">23/09/2022 08.15 WIB</td>
                </tr>

                <tr className="tr-content-lastact-box">
                    <td className="name-task">
                        <span className="name-task2">Task 115</span>
                    </td>
                    <td className="activity-task">Mensubmit Jurnal ke OJS</td>
                    <td className="date-time-task">25/09/2022 16.52 WIB</td>
                </tr>
            </table>
        </div>
    );
};

export default InfoLastAct;