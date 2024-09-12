import Button from "@/components/ui-overwrite/button";
import { HeartIcon } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacts" className="flex flex-col h-[40vh]">
      <div className="py-8 flex flex-col gap-4 items-center">
        <h2>{`Let's be awesome together!`}</h2>
        <Button asChild className="text-sm">
          <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>Get in touch!</a>
        </Button>
        <div className="flex gap-2 text-xs">
          <p className="text-sm">Coded with </p>
          <HeartIcon className="text-primary" />
          <p className="text-sm">by Sai Myo Myat... </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
