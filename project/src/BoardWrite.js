import React, { useState } from "react";
import styles from "./BoardWrite.module.css";

function Register() {
  const [TitleValue, setTitleValue] = useState("");
  const [ContentValue, setContentValue] = useState("");
  const [ImagetValue, setImageValue] = useState("");

  const onTitleChange = (e) => {
    setTitleValue(e.currentTarget.value);
  };

  const onContentChange = (e) => {
    setContentValue(e.currentTarget.value);
  };

  const onImageChange = (e) => {
    setImageValue(e.currentTarget.value);
  };

  return (
    <div className={styles.Register}>
      <h2 className={styles.r__h2}>글 작성하기</h2>
      <form className={styles.r__form} onSubmit>
        <div className={styles.r__title}>
          <label className={styles.label}>제목</label>
          <input
            className={styles.t__input}
            onChange={onTitleChange}
            value={TitleValue}
            type="text"
            name="title"
            placeholder="제목을 입력하세요"
          />
        </div>
        <div className={styles.r__content}>
          <label className={styles.label}>내용</label>
          <textarea
            className={styles.r__textarea}
            onChange={onContentChange}
            value={ContentValue}
            name="content"
            placeholder="내용을 입력하세요"
          />
        </div>
        <div className={styles.r__image}>
          <label className={styles.label}>이미지</label>
          <input
            className={styles.input}
            onChange={onImageChange}
            value={ImagetValue}
            type="text"
            placeholder="파일첨부"
            name="image"
          />
          <button className={styles.r__btn}>파일첨부</button>
        </div>
        <button className={styles.r__submit} onClick>
          작성하기
        </button>
      </form>
    </div>
  );
}

export default Register;
