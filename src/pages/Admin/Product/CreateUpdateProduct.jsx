import React, { useEffect, useState } from 'react';
import { Footer, Header, Navbar, Sidebar, ThemeSettings } from '../../../components/Admin';
import "../Admin.css";
import { useStateContext } from '../../../contexts/ContextProvider';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { FiSettings } from 'react-icons/fi';
import { getListAllBranch } from '../../../service/Admin/Branch';
import { getListAllCategory } from '../../../service/Admin/Category';

const CreateUpdateProduct = () => {
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
        let promise, promiseCategory;
        promise = getListAllBranch();
        promise
            .then(response => {
                setLstBranch(response);
            }).catch(error => {
                console.log(error)
            });
        promiseCategory = getListAllCategory();
        promiseCategory
            .then(response => {
                setLstCategory(response);
            }).catch(error => {
                console.log(error)
            });
    }, []);

    const [lstCategory, setLstCategory] = useState([]);

    const [lstBranch, setLstBranch] = useState([]);

    const [state, setState] = useState({
        branch: '',
        category: '',
        product_name: '',
        quantity: 0,
        price: '',
        sale: '',
        rate: 5,
        description: '',
        content: '',
        status: 0,
        create_by: 1,
        update_by: 1
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
                            <Header category="Admin" title="Tạo mới/Cập nhật sản phẩm" />
                            <form>
                                <div class="mb-3 mt-3">
                                    <label class="form-label">Thể loại</label>
                                    {/* <input type="text" class="form-control" placeholder="Mã nhà sản xuất" style={{ height: '44px', borderRadius: '6px' }} /> */}
                                    <select className="form-control" onChange={handleInputChange} name="category">
                                        {lstCategory.map((c) => (
                                            <option value={c.id}>{c.category_name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div class="mb-3 mt-3">
                                    <label class="form-label">Nhãn hàng</label>
                                    {/* <input type="text" class="form-control" placeholder="Mã nhà sản xuất" style={{ height: '44px', borderRadius: '6px' }} /> */}
                                    <select className="form-control" onChange={handleInputChange} name="branch">
                                        {lstBranch.map((b) => (
                                            <option value={b.id}>{b.branch_name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div class="mb-3 mt-3">
                                    <label class="form-label">Tên sản phẩm</label>
                                    <input type="text" class="form-control" placeholder="Tên sản phẩm" style={{ height: '44px', borderRadius: '6px' }} name="product_name" onChange={handleInputChange}/>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Giá</label>
                                    <input type="text" class="form-control" placeholder="Giá" style={{ height: '44px', borderRadius: '6px' }} name="price" onChange={handleInputChange}/>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Khuyến mại</label>
                                    <input type="text" class="form-control" placeholder="Khuyến mại" style={{ height: '44px', borderRadius: '6px' }} name="sale" onChange={handleInputChange}/>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Mô tả</label>
                                    <input type="text" class="form-control" placeholder="Tên nhà sản xuất" style={{ height: '44px', borderRadius: '6px' }} name="description" onChange={handleInputChange}/>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Mô tả chi tiết</label>
                                    <input type="text" class="form-control" placeholder="Tên nhà sản xuất" style={{ height: '44px', borderRadius: '6px' }} name="content" onChange={handleInputChange}/>
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
export default CreateUpdateProduct;
