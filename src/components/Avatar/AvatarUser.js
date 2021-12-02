import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const AvatarUser = () => {
    const [image, setImage] = useState({});
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("picture", data.picture[0]);
        // const res = await fetch("http://localhost:5000/ava/test", {
        //     method: "POST",
        //     body: formData,
        // }).then((res) => res.json());
        const res = axios.post("http://localhost:5000/ava/test", formData);
        console.log(res);
    };

    const uploadImage = async (e) => {
        const files = e.target.files[0];
        // console.log({ files });
        // const data = new FormData();
        // data.append("file", files[0]);
        // data.append("upload_preset", "darwin");
        // // console.log(data);
        // console.log({ files });
        setImage(files);
    };
    const submit = (e) => {
        e.preventDefault();
        let fd = new FormData();
        fd.append("t", 1);
        fd.append("picture", image);
        const res = axios.post("http://localhost:5000/ava/test", fd);
        console.log(res);
    };
    return (
        // <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <p>Select</p>
            <input
                // {...register("picture", { required: true })}
                onChange={uploadImage}
                type="file"
                name="picture"
            />
            <button onClick={submit}>Submit</button>
        </div>
        // </form>
    );
};

export default AvatarUser;
