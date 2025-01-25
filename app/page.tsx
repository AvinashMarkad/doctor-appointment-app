import Image from "next/image";
import Link from "next/link";
import PatientForm from "@/components/forms/PatientForm";

const Home = () => {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <div className="flex items-center space-x-4 mb-10">
            <Image
              src="/assets/icons/logo-icon.svg"
              height={40}
              width={40}
              alt="patient"
              className="h-10 w-10"
            />
            <h1 className="text-lg font-bold">WellCarePlus</h1>
          </div>

          <PatientForm />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2025 CarePlus
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <div className="w-1/2">
        <Image
          src="/assets/images/onboarding-img.png"
          height={1000}
          width={1000}
          alt="patient"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
