
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {editCourse, getdetailCourse} from "../../../../redux/actions/QuanLyCourses";

import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from "antd";
import { useFormik } from "formik";
import moment from "moment";
import { http } from "../../../../utils/config";
import { addNewCourse } from "../../../../redux/actions/QuanLyCourses";
import { useEffect } from "react";
export default function EditCourse(props) {
  const [componentSize, setComponentSize] = useState("default");
  const params = props.match.params.id
  
  const {detailCourse} = useSelector (state => state.coursesReducer)

  let c  =   detailCourse.danhMucKhoaHoc;
  let d = {...c}


  let b = detailCourse.ngayTao

  console.log(detailCourse)
  useEffect ( async ()=>{ 
    dispatch(getdetailCourse(params))
  },[])

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const { userLogin } = useSelector((state) => state.quanLyLogin);
  let a = detailCourse.hinhAnh
  const [img, setImg] = useState(a);
//   console.log(img)
  const dispatch = useDispatch();
  const formik = useFormik({
    enableReinitialize: true,  
    initialValues: {
      maKhoaHoc: detailCourse.maKhoaHoc,
      biDanh: detailCourse.biDanh ,
      tenKhoaHoc: detailCourse.tenKhoaHoc,
      moTa: detailCourse.moTa,
      luotXem: detailCourse.luotXem,
      danhGia: 0,
      hinhAnh: null,
      maNhom: "GP01",
      ngayTao: detailCourse.ngayTao,
      maDanhMucKhoaHoc: "TuDuy",
      taiKhoanNguoiTao: userLogin.taiKhoan,
      
    },
    
    // detailCourse.danhMucKhoaHoc.maDanhMucKhoahoc
    onSubmit: async (values) => {
      console.log("values", values);

      let formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          formData.append("hinhAnh", values.hinhAnh, values.hinhAnh.name);
        }
      }
      dispatch(editCourse(formData));
     
    },
  });

  const handleChangeDatePicker = (value) => {
    // console.log('handleChangeDatePicker',moment(value).format('DD/MM/YYYY'))
    let ngayTao = moment(value).format("DD/MM/YYYY");
    formik.setFieldValue("ngayTao", ngayTao);
  };

  const handleChangeInputNumber = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };
  const handleChangeFile = (e) => {
    let file = e.target.files[0];
    if (e.target.files[0]) {
      formik.setFieldValue('hinhAnh',file)  
      var reader = new FileReader();
      reader.readAsDataURL(file);
      setImg(reader.result)
      reader.onload = (e) => {
        console.log("a", e.target.result);
        setImg(e.target.result);
      };
    }
    // formik.setFieldValue("hinhAnh", file);
  };
  const handleChangeOption = (value) => {
    formik.setFieldValue("maDanhMucKhoaHoc", value);
  };

  return (
    <div>
      <Form
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <h3>Chỉnh sửa khóa học</h3>
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Ma Khoa Hoc">
          <Input name="maKhoaHoc" onChange={formik.handleChange} value={formik.values.maKhoaHoc} />
        </Form.Item>
        <Form.Item label="Bi Danh">
          <Input name="biDanh" onChange={formik.handleChange} value={formik.values.biDanh} />
        </Form.Item>
        <Form.Item label="Ten Khoa Hoc">
          <Input name="tenKhoaHoc" onChange={formik.handleChange} value={formik.values.tenKhoaHoc} />
        </Form.Item>
        <Form.Item label="Mo Ta">
          <Input name="moTa" onChange={formik.handleChange} value={formik.values.moTa} />
        </Form.Item>
        <Form.Item label="Ma Danh Muc Khoa Hoc">
          <Select name="maDanhMucKhoaHoc" onChange={handleChangeOption} defaultValue= {formik.values.maDanhMucKhoaHoc} >
            <Select.Option value="BackEnd">Lập trình Backend</Select.Option>
            <Select.Option value="Design">Thiết kế Web</Select.Option>
            <Select.Option value="FrontEnd">Lập trình Front end</Select.Option>
            <Select.Option value="FullStack">
              Lập trình Full Stack
            </Select.Option>
            <Select.Option value="TuDuy">Tư duy lập trình</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Luot Xem">
          <InputNumber
            name="luotXem"
            onChange={handleChangeInputNumber("luotXem")}
            min={0}
            max={100}
            value={formik.values.luotXem}
          
          />
        </Form.Item>
        <Form.Item label="Danh Gia">
          <InputNumber
            name="danhGia"
            onChange={handleChangeInputNumber("danhGia")}
            min={1}
            max={5}
          
          />
        </Form.Item>
        
        <Form.Item label="Ngay Tao">
          <DatePicker
            name="ngayTao"
            format={"DD/MM/YYYY"}
            onChange={handleChangeDatePicker}
            // value={formik.values.ngayTao}
            defaultValue={moment(b)}
        
          />
        </Form.Item>
        {/* <Form.Item label="Ma Danh Muc Khoa Hoc">
          <Input name='maDanhMucKhoaHoc' onChange={formik.handleChange} />
        </Form.Item> */}
        <Form.Item label="Hinh Anh">
          <input
            type="file"
            onChange={handleChangeFile}
            accept="image/png, image/jpeg, image/jpg"
          />
          <br />
          <img width={100} height={100} src={img} alt="..." />
        </Form.Item>
        <Form.Item label="Button">
          <button type="submit" className="bg-blue-300 text-white p-2">
            Button
          </button>
        </Form.Item>
      </Form>
    </div>
  );
}