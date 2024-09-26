import Button from "@/components/ui-overwrite/button";
import { HeartIcon } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacts" className="flex flex-col h-[30vh] sm:h-[40vh]">
      <div className="py-8 flex flex-col gap-6 items-center">
        <h2>Ready to Collaborate?</h2>
        <Button asChild className="animate-shake-rest">
          <a
            className="font-bold"
            href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
          >
            Contact me!
          </a>
        </Button>
        <div className="flex items-center gap-2">
          <p className="text-sm">Coded with </p>
          <HeartIcon className="text-primary" />
          <div className="text-sm flex gap-2">
            by <h3 className="text-sm font-bold">Sai Myo Myat</h3>...
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
