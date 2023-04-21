import React, { useEffect, useState } from 'react';
import { Footer, Header, Navbar, Sidebar, ThemeSettings } from '../../../components/Admin';
import "../Admin.css";
import { useStateContext } from '../../../contexts/ContextProvider';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { FiSettings } from 'react-icons/fi';
import { saveSupplier } from '../../../service/Admin/Supplier';
import { showNotification } from '../../../service/NotificationService';

const CreateUpdateProducer = () => {
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
    }, []);

    const [state, setState] = useState({
        supplier_name: '',
        phone: '',
        address: ''
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    };

    const save = () => {
        console.log(state);
        saveSupplier(state)
            .then(response => {
                showNotification('Tạo nhà cung cấp thành công', 'success');
                window.location.replace("/admin/manages-producer")
            }).catch(error => {
                console.log(error)
                showNotification('Tạo nhà cung cấp thất bại!', 'danger');
            });
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
                            <Header category="Admin" title="Tạo mới/Cập nhật nhà cung cấp" />
                            <form>
                                <div class="mb-3 mt-3">
                                    <label class="form-label">Tên nhà cung cấp</label>
                                    <input type="text" class="form-control" placeholder="Tên nhà cung cấp" style={{ height: '44px', borderRadius: '6px' }} name="supplier_name" onChange={handleInputChange} />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">SĐT</label>
                                    <input type="text" class="form-control" placeholder="Số điện thoại" style={{ height: '44px', borderRadius: '6px' }} name="phone" onChange={handleInputChange} />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Địa chỉ</label>
                                    <input type="text" class="form-control" placeholder="Địa chỉ nhà sản xuất" style={{ height: '44px', borderRadius: '6px' }} name="address" onChange={handleInputChange} />
                                </div>
                                <button type="button" class="btn btn-primary" onClick={() => save()}>Lưu</button>
                            </form>
                        </div>

                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};
export default CreateUpdateProducer;
