import React, { useEffect, useState } from 'react';
import { Footer, Header, Navbar, Sidebar, ThemeSettings } from '../../../components/Admin';
import "../Admin.css";
import { useStateContext } from '../../../contexts/ContextProvider';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { FiSettings } from 'react-icons/fi';
import { getListAllSupplier } from '../../../service/Admin/Supplier';

const ListProducer = () => {
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
        promise = getListAllSupplier();
        promise
            .then(response => {
                console.log(response);
                setLstSupplier(response);
            }).catch(error => {
                console.log(error)
            });
    }, []);

    const [lstSupplier, setLstSupplier] = useState([])

    const routerCreateProducer = () => {
        window.location.replace('http://localhost:3000/admin/create-update-producer')
    }

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
                            <Header category="Admin" title="Qu???n l?? nh?? cung c???p" />
                            <button className='btn btn-primary' onClick={() => routerCreateProducer()}>T???o m???i</button>
                            <table
                                className="table table-bordered"
                                id="dataTable"
                                width="100%"
                                cellspacing="0"
                            >
                                <thead>
                                    <tr className='text-center'>
                                        <th >STT</th>
                                        <th>T??n nh?? cung c???p</th>
                                        <th>S??T</th>
                                        <th>?????a ch???</th>
                                        <th>Ng?????i t???o</th>
                                        <th>Ng??y t???o</th>
                                        <th colSpan="2">L???a ch???n</th>
                                    </tr>
                                </thead>
                                <tbody classNameName="list">
                                    {lstSupplier.map((s, index) => (
                                        <tr key={s.id} className='text-center'>
                                            <td>{index + 1}</td>
                                            <td>{s.supplier_name}</td>
                                            <td>{s.phone}</td>
                                            <td>{s.address}</td>
                                            <td>{s.create_by_name}</td>
                                            <td>{s.create_date}</td>
                                            <td className="text-center">
                                                <i className='fa fa-edit' style={{ 'cursor': 'pointer' }} onClick={() => { this.updateCategory(s) }}></i>
                                            </td>
                                            <td>
                                                <i className='fa fa-trash' style={{ 'cursor': 'pointer', 'color': 'red' }} data-toggle="modal" data-target="#exampleModal" onClick={() => { this.deleteCategory(s) }}></i>
                                            </td>
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
export default ListProducer;
