import Image from "next/image";
import Link from "next/link";
import PatientForm from "@/components/forms/PatientForm";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen max-h-screen">
      <section className="flex flex-1 items-center justify-center px-6 py-10 lg:py-0">
        <div className="w-full max-w-[496px]">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4 mb-8">
            <Image
              src="/assets/icons/logo-icon.svg"
              height={40}
              width={40}
              alt="patient"
              className="h-10 w-10"
            />
            <h1 className="text-xl font-bold text-center lg:text-left">
              WellCarePlus
            </h1>
          </div>

          {/* Patient Form */}
          <PatientForm />

          {/* Footer Section */}
          <div className="mt-10 flex flex-col items-center space-y-4 lg:flex-row lg:justify-between lg:space-y-0">
            <p className="text-sm text-dark-600 text-center lg:text-left">
              © 2025 CarePlus
            </p>
            <Link
              href="/?admin=true"
              className="text-green-500 hover:underline"
            >
              Admin
            </Link>
          </div>
        </div>
      </section>

      {/* Right Image Section */}
      <div className="flex-1 hidden lg:block">
        <Image
          src="/assets/images/onboarding-img.png"
          height={1000}
          width={1000}
          alt="patient"
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
};

export default Home;
