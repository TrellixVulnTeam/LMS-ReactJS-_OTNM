import React from "react";
import {FaAngleDoubleRight} from "react-icons/fa";

const Category = (props) =>{
    return(
        <>
             <section className="category-section">
                    <div className="bread-crumb">
                        <h3><span>Oreland LMS</span><i><FaAngleDoubleRight /></i><span>{props.data}</span></h3>
                    </div>
                    <div className="section-break"></div>
                    <div className="bred-crumb-category">
                    <div className="my-category">
                    <h1>Category</h1>
                        <ul>
                            <li>
                            <div className="check-btn"><input type="checkbox" class="form-check-input" /></div>
                            <div className="cat-items"><h3>Information Technology</h3></div>
                            <div className="item-quantity"><span>(98)</span></div>
                            </li>
                            <li>
                            <div className="check-btn"><input type="checkbox" class="form-check-input" /></div>
                            <div className="cat-items"><h3>Softwares</h3></div>
                            <div className="item-quantity"><span>(75)</span></div>
                            </li>
                            <li>
                            <div className="check-btn"><input type="checkbox" class="form-check-input" /></div>
                            <div className="cat-items"><h3>Designing</h3></div>
                            <div className="item-quantity"><span>(88)</span></div>
                            </li>
                            <li>
                            <div className="check-btn"><input type="checkbox" class="form-check-input" /></div>
                            <div className="cat-items"><h3>Photoshop</h3></div>
                            <div className="item-quantity"><span>(25)</span></div>
                            </li>
                            <li>
                            <div className="check-btn"><input type="checkbox" class="form-check-input" /></div>
                            <div className="cat-items"><h3>Illustrator</h3></div>
                            <div className="item-quantity"><span>(28)</span></div>
                            </li>
                            <li>
                            <div className="check-btn"><input type="checkbox" class="form-check-input" /></div>
                            <div className="cat-items"><h3>After Effect</h3></div>
                            <div className="item-quantity"><span>(36)</span></div>
                            </li>
                            <li>
                            <div className="check-btn"><input type="checkbox" class="form-check-input" /></div>
                            <div className="cat-items"><h3>Indesign</h3></div>
                            <div className="item-quantity"><span>(15)</span></div>
                            </li>
                            <li>
                            <div className="check-btn"><input type="checkbox" class="form-check-input" /></div>
                            <div className="cat-items"><h3>Blender</h3></div>
                            <div className="item-quantity"><span>(22)</span></div>
                            </li>
                            <li>
                            <div className="check-btn"><input type="checkbox" class="form-check-input" /></div>
                            <div className="cat-items"><h3>Databse</h3></div>
                            <div className="item-quantity"><span>(55)</span></div>
                            </li>
                            <li>
                            <div className="check-btn"><input type="checkbox" class="form-check-input" /></div>
                            <div className="cat-items"><h3>Networking</h3></div>
                            <div className="item-quantity"><span>(66)</span></div>
                            </li>
                            <li>
                            <div className="check-btn"><input type="checkbox" class="form-check-input" /></div>
                            <div className="cat-items"><h3>Physics</h3></div>
                            <div className="item-quantity"><span>(99)</span></div>
                            </li>
                            <li>
                            <div className="check-btn"><input type="checkbox" class="form-check-input" /></div>
                            <div className="cat-items"><h3>Chemistry</h3></div>
                            <div className="item-quantity"><span>(77)</span></div>
                            </li>
                            <li>
                            <div className="check-btn"><input type="checkbox" class="form-check-input" /></div>
                            <div className="cat-items"><h3>Biology</h3></div>
                            <div className="item-quantity"><span>(18)</span></div>
                            </li>
                            <div className="side-line-break"></div>
                        </ul>
                    </div>
                    </div>
            </section>   
        </>
    );
}
export default Category;