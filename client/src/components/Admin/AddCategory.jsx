import React from "react";
import { Formik, Field, Form } from 'formik';
import { CategoryApiCreate} from "../../redux/axios/getApi";

const AddCategory = (props) => {

    // const { name, parentName, brandId } = req.body;

    return (<Formik
        initialValues={{
            name: '',
            parentName: '',
            brandId: '',
        }}
        onSubmit={async (values) => {
            await new Promise(
                CategoryApiCreate(values)
                );
            alert(JSON.stringify(values, null, 2));
        }}
    >
        <Form>
            <div>
                <label htmlFor="name">Product Name</label>
                <Field className="background_grey box_shadow_4 radius_50 height_50 input" id="name" name="name" placeholder="Title" />
            </div>
            <div>
                <label htmlFor="parentName">Product Price</label>
                <Field className="background_grey box_shadow_4 radius_50 height_50 input" id="parentName" name="parentName" placeholder="parentName" />
            </div>
            <div>
                <label htmlFor="brandId">brandId</label>
                <Field className="background_grey box_shadow_4 radius_50 height_50 input" id="brandId" name="brandId" placeholder="brandId" />
            </div>
            <button className="background_red radius_50 height_50" type ="submit">Submit</button>
        </Form>
    </Formik>
    )
}

export default AddCategory;