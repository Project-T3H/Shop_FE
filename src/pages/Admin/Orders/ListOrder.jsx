import React, { useEffect, useState } from 'react';
import { Footer, Header, Navbar, Sidebar, ThemeSettings } from '../../../components/Admin';
import "../Admin.css";
import { useStateContext } from '../../../contexts/ContextProvider';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { FiSettings } from 'react-icons/fi';
import { getListAllOrders } from '../../../service/Admin/Orders';

const ListOrder = () => {
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
        promise = getListAllOrders();
        promise
            .then(response => {
                setLstOrders(response);
            }).catch(error => {
                console.log(error)
            });
    }, []);

    const [lstOrders, setLstOrders] = useState([])

    const routerViewOrderItem = (o) => {
        window.location.replace('admin/order-item/' + o.id);
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
                            <Header category="Admin" title="Danh sách đơn hàng" />
                            <table
                                className="table table-bordered"
                                id="dataTable"
                                width="100%"
                                cellspacing="0"
                            >
                                <thead>
                                    <tr className='text-center'>
                                        <th >STT</th>
                                        <th>Tên khách hàng</th>
                                        <th>SĐT</th>
                                        <th>Email</th>
                                        <th>Địa chỉ</th>
                                        <th>Tổng hàng</th>
                                        <th>Trạng thái</th>
                                        <th>Ngày đặt</th>
                                        <th>Chi tiết</th>
                                    </tr>
                                </thead>
                                <tbody classNameName="list">
                                    {lstOrders.map((o, index) => (
                                        <tr key={o.id} className='text-center'>
                                            <td>{index + 1}</td>
                                            <td>{o.order_code}</td>
                                            <td>{o.phone}</td>
                                            <td>{o.email}</td>
                                            <td>{o.address}</td>
                                            <td>{Number(o.total_price).toLocaleString('es-US')} VNĐ</td>
                                            <td>{o.status === 0 ? 'Chờ duyệt' : 'Duyệt'}</td>
                                            <td>{o.create_date}</td>
                                            <td className="text-center">
                                                <i className='fa fa-edit' style={{ 'cursor': 'pointer' }} onClick={() => routerViewOrderItem(o)}></i>
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
export default ListOrder;
