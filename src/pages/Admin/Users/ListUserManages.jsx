import React, { useEffect, useState } from 'react';
import { Footer, Header, Navbar, Sidebar, ThemeSettings } from '../../../components/Admin';
import "../Admin.css";
import { useStateContext } from '../../../contexts/ContextProvider';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { FiSettings } from 'react-icons/fi';
import { getListAllUserManages } from '../../../service/Admin/UserManages';

const ListUserManages = () => {
    const {
        setCurrentColor,
        setCurrentMode,
        currentMode,
        activeMenu,
        currentColor,
        themeSettings,
        setThemeSettings,
    } = useStateContext();

    useEffect(() => {
        const currentThemeColor = localStorage.getItem("colorMode");
        const currentThemeMode = localStorage.getItem("themeMode");
        if (currentThemeColor && currentThemeMode) {
            setCurrentColor(currentThemeColor);
            setCurrentMode(currentThemeMode);
        }
        let promise;
        promise = getListAllUserManages();
        promise
            .then(response => {
                console.log(response);
                setLstUserManages(response);
            }).catch(error => {
                console.log(error)
            });
    }, []);

    const [lstUserManages, setLstUserManages] = useState([]);

    return (
        <div className={currentMode === "Dark" ? "dark" : ""}>
            <div className="flex relative dark:bg-main-dark-bg">
                <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
                    <TooltipComponent content="Settings" position="Top">
                        <button
                            type="button"
                            onClick={() => setThemeSettings(true)}
                            style={{ background: currentColor, borderRadius: "50%" }}
                            className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray">
                            <FiSettings />
                        </button>
                    </TooltipComponent>
                </div>
                {activeMenu ? (
                    <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                        <Sidebar />
                    </div>
                ) : (
                    <div className="w-0 dark:bg-secondary-dark-bg">
                        <Sidebar />
                    </div>
                )}
                <div
                    className={
                        activeMenu
                            ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
                            : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
                    }
                >
                    <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                        <Navbar />
                    </div>
                    <div>
                        {themeSettings && <ThemeSettings />}

                        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
                            <Header category="Admin" title="Danh sách nhân viên" />
                            <table
                                className="table table-bordered"
                                id="dataTable"
                                width="100%"
                                cellspacing="0"
                            >
                                <thead>
                                    <tr className='text-center'>
                                        <th >STT</th>
                                        <th>Tên đăng nhập</th>
                                        <th>Email</th>
                                        <th>SĐT</th>
                                        <th>Địa chỉ</th>
                                    </tr>
                                </thead>
                                <tbody classNameName="list">
                                    {lstUserManages.map((u, index) => (
                                        <tr key={u.id} className='text-center'>
                                            <td>{index + 1}</td>
                                            <td>{u.username}</td>
                                            <td>{u.email}</td>
                                            <td>{u.phone}</td>
                                            <td>{u.address}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};
export default ListUserManages;
