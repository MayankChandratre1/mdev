"use client";
import { useRouter, useSearchParams } from "next/navigation";

import React, { useState, useTransition } from "react";
import {
  CldUploadWidget,
  CloudinaryUploadWidgetResults,
  CloudinaryUploadWidgetInfo,
} from "next-cloudinary";
import Image from "next/image";
import { onUploadSuccess } from "@/lib/cloudinary";
import { Button } from "../ui/button";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import PopupNotification from "../layout/PopupNotification";
import { Input } from "../ui/input";
import { tagFormatter } from "@/lib/tagFormatter";

const PublishForm = () => {
  const params = useSearchParams();
  const id = params.get("id");
  const [url, setUrl] = useState<string>("https://res.cloudinary.com/dvsl1aslo/image/upload/v1723570879/lwepihcmiyi8jgp1txny.webp");
  const [success, setSuccess] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);
  const [tags, setTags] = useState<string[]>([]);
  const router = useRouter()

  const uploadHandler = (results: CloudinaryUploadWidgetResults) => {
    const res = onUploadSuccess(results);
    setError("")
    setSuccess("")
    setUrl("")
    setShow(false)
    if (res?.success && res?.url) {
      setSuccess(res.success);
      setUrl(res.url);
      setShow(true)
    } else {
      setError(res?.error || "");
      setShow(true)
    }

    setTimeout(()=>{
      setShow(false)
    },1500)
  };

  return (
    <div>
      <div>
        <Button variant={"ghost"} onClick={()=>{
            router.back();
        }}><ArrowLeftIcon/></Button>
      </div>
      {show && error && <PopupNotification message={error} success={false} />}
      {show && success && <PopupNotification message={success} success />}
      <div className="w-3/4 lg:w-1/2 mx-auto">
        <CldUploadWidget
          uploadPreset="mdev_preset"
          options={{
            sources: ["local", "url"],
            multiple: false,
            maxFiles: 1,
          }}
          onSuccess={uploadHandler}
        >
          {({ open }) => {
            return <Button className="m-3" onClick={() => open()}>Upload an Image</Button>;
          }}
        </CldUploadWidget>
        <div className="text-center my-3">
          {!url ? <div className='w-full h-[200px] lg:h-[300px] bg-red-500'>
          <Image src={url} alt='thumbnail' width={600} height={400} className='w-full h-full object-cover'/>
        </div>:"Image"}
        </div>
        <div>
          <label htmlFor="tags" className="block p-2 my-2 text-xl">Tags</label>
          <Input name="tags" type="text" className="block py-5 text-lg text-blue-500" onBlur={(e)=>{
            const tags = tagFormatter(e.target.value);
            console.log(tags);
            setTags(tags)
          }} value={tags.join(' ')}></Input>
        </div>
      </div>
    </div>
  );
};

export default PublishForm;
