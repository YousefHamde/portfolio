"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Send, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

// Contact.tsx
import contactValidationSchema, {
  sanitizeInput,
} from "@/services/contactValidation";

const icons = { Mail, Phone, MapPin };

const Contact = ({ contactInfo, contactMessage }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { toast } = useToast();

  const mainMessage = contactMessage.main;
  const supMessage = contactMessage.supMain;

  const handleSubmit = async (
    values: any,
    { setSubmitting, resetForm }: any
  ) => {
    try {
      const sanitizedValues = {
        name: sanitizeInput(values.name),
        email: sanitizeInput(values.email),
        subject: sanitizeInput(values.subject),
        message: sanitizeInput(values.message),
      };

      // ⚙️ محاكاة إرسال البيانات (بدلاً من API حقيقي)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "تم إرسال الرسالة بنجاح!",
        description: "سأتواصل معك في أقرب وقت ممكن.",
      });

      resetForm();
    } catch (error) {
      toast({
        title: "فشل في إرسال الرسالة",
        description: "حدث خطأ، يرجى المحاولة مرة أخرى.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        {/* ✅ العنوان */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">تواصل معي</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {mainMessage}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* ✅ معلومات التواصل */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8 gradient-text">
              معلومات التواصل
            </h3>
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => {
                const Icon = icons[info.icon as keyof typeof icons];
                if (!Icon) return null;

                if (Icon === MapPin)
                  return (
                    <motion.button
                      key={index}
                      className="flex items-center p-6 glass rounded-lg hover:bg-primary/5 transition-all duration-300 group w-full"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <div className="p-4 bg-primary/10 rounded-full mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                          {info.title}
                        </h4>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </motion.button>
                  );
                return (
                  <motion.a
                    key={index}
                    href={info.href}
                    className="flex items-center p-6 glass rounded-lg hover:bg-primary/5 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="p-4 bg-primary/10 rounded-full mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                        {info.title}
                      </h4>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* ✅ رسالة ترحيب إضافية */}
            <motion.div
              className="glass p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <MessageCircle className="w-8 h-8 text-primary mb-4" />
              <p className="text-muted-foreground leading-relaxed">
                {supMessage}
              </p>
            </motion.div>
          </motion.div>

          {/* ✅ نموذج التواصل */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="glass">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text">
                  أرسل رسالة
                </h3>

                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                  }}
                  validationSchema={contactValidationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting, errors, touched }) => (
                    <Form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Field
                            as={Input}
                            name="name"
                            maxLength={50}
                            placeholder="الاسم الكامل *"
                            className={`glass ${
                              errors.name && touched.name
                                ? "border-destructive"
                                : ""
                            }`}
                          />
                          <ErrorMessage
                            name="name"
                            component="div"
                            className="text-destructive text-sm mt-1"
                          />
                        </div>

                        <div>
                          <Field
                            as={Input}
                            name="email"
                            type="email"
                            maxLength={100}
                            placeholder="البريد الإلكتروني *"
                            className={`glass ${
                              errors.email && touched.email
                                ? "border-destructive"
                                : ""
                            }`}
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="text-destructive text-sm mt-1"
                          />
                        </div>
                      </div>

                      <div>
                        <Field
                          as={Input}
                          name="subject"
                          maxLength={100}
                          placeholder="موضوع الرسالة *"
                          className={`glass ${
                            errors.subject && touched.subject
                              ? "border-destructive"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          name="subject"
                          component="div"
                          className="text-destructive text-sm mt-1"
                        />
                      </div>

                      <div>
                        <Field
                          as={Textarea}
                          name="message"
                          rows={6}
                          maxLength={500}
                          placeholder="اكتب رسالتك هنا... *"
                          className={`glass resize-none ${
                            errors.message && touched.message
                              ? "border-destructive"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          name="message"
                          component="div"
                          className="text-destructive text-sm mt-1"
                        />
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn-hero w-full group"
                        >
                          {isSubmitting ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                          ) : (
                            <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                          )}
                          {isSubmitting ? "جاري الإرسال..." : "إرسال الرسالة"}
                        </Button>
                      </motion.div>
                    </Form>
                  )}
                </Formik>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
