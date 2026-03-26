// src/validation/contactValidation.ts
import * as Yup from "yup";
import DOMPurify from "dompurify";

/** دالة تعقيم قابلة لإعادة الاستخدام */
export const sanitizeInput = (value: unknown) => {
  if (typeof value !== "string") return "";
  // خيار: تمنع أي tags و attributes
  return DOMPurify.sanitize(value, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [],
  }).trim();
};

/** الـ Yup schema محفوظ ومُصدّر */
const contactValidationSchema = Yup.object({
  name: Yup.string()
    .transform((v) => sanitizeInput(v))
    .required("الاسم مطلوب")
    .min(2, "الاسم يجب أن يكون أكثر من حرفين")
    .max(50, "الاسم يجب أن يكون أقل من 50 حرف")
    .matches(
      /^[\u0600-\u06FFa-zA-Z\s]+$/,
      "الاسم يحتوي على رموز غير مسموح بها"
    ),

  email: Yup.string()
    .transform((v) => sanitizeInput(v))
    .email("البريد الإلكتروني غير صحيح")
    .required("البريد الإلكتروني مطلوب")
    .max(100, "البريد الإلكتروني طويل جداً"),

  subject: Yup.string()
    .transform((v) => sanitizeInput(v))
    .required("الموضوع مطلوب")
    .min(5, "الموضوع يجب أن يكون أكثر من 5 أحرف")
    .max(100, "الموضوع يجب أن يكون أقل من 100 حرف")
    .matches(/^[^<>{}]+$/, "الموضوع يحتوي على رموز غير آمنة"),

  message: Yup.string()
    .transform((v) => sanitizeInput(v))
    .required("الرسالة مطلوبة")
    .min(10, "الرسالة يجب أن تكون أكثر من 10 أحرف")
    .max(500, "الرسالة يجب أن تكون أقل من 500 حرف")
    .matches(/^[^<>{}]+$/, "الرسالة تحتوي على رموز غير آمنة"),
});

export default contactValidationSchema;
