import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Input, Button, RTE, Select } from "../index";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import service from "../../Appwrite/config";

const PostForm = ({ post }) => {
  const { register, setValue, watch, getValues, control, handleSubmit } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const navigate = useNavigate();
  useSelector((state) => state.user.userData);

  const submit = async (data) => {
    if (post) {
      const file = data.image[0] ? service.uploadFile(data.image[0]) : null;

      if (file) {
        service.deleteFile(post.featuredImage);
      }
      const dbPost = await service.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = await service.uploadFile(data.image[0]);
      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        const dbPost = await service.createPost({
          ...data,
          userId: userData.$id,
        });
        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  return <></>;
};

export default PostForm;
