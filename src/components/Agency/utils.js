export const scrollTo = (target) => {
  document
    .querySelector(`.agency-page #${target}`)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const validateContact = (values) => {
  const errors = {};
  if (!values.name.trim()) errors.name = "هذا الحقل إلزامي";
  else if (values.name.length < 2) errors.name = "الحد الأدنى لعدد الحروف هو 2";
  if (!values.email.trim()) errors.email = "هذا الحقل إلزامي";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "رجاء إدخال عنوان بريد إلكتروني صحيح";
  if (!values.comment.trim()) errors.comment = "هذا الحقل إلزامي";
  return errors;
};