import { Bentham } from "next/font/google";
import Link from "next/link";
import React from "react";

const services = [
  {
    serviceId: "srv001",
    serviceName: "Screen Replacement",
    description: "Replace broken or damaged mobile screens with high-quality replacements.",
    hourlyRate: 50,
    estimatedTimeHours: 2,
    availability: "Monday to Saturday (9:00 AM - 6:00 PM)",
  },
  {
    serviceId: "srv002",
    serviceName: "Battery Replacement",
    description: "Replace old or faulty batteries for improved performance.",
    hourlyRate: 40,
    estimatedTimeHours: 1,
    availability: "Monday to Friday (10:00 AM - 5:00 PM)",
  },
  {
    serviceId: "srv003",
    serviceName: "Software Update",
    description: "Update mobile software to the latest version and optimize settings.",
    hourlyRate: 30,
    estimatedTimeHours: 0.5,
    availability: "Monday to Saturday (10:00 AM - 4:00 PM)",
  },
  {
    serviceId: "srv004",
    serviceName: "Water Damage Repair",
    description: "Diagnose and repair phones damaged by water or other liquids.",
    hourlyRate: 60,
    estimatedTimeHours: 3,
    availability: "Monday, Wednesday, Friday, Saturday (9:00 AM - 6:00 PM)",
  },
];

const page = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <Link href={'hourly/specialblog'}> speical blog link</Link>
        {services.map((service) => (
          <div
            key={service.serviceId}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            <div className="bg-green-500 text-white px-4 py-3 text-lg font-bold">
              {service.serviceName}
            </div>
            <div className="p-4">
              <p className="text-gray-700">{service.description}</p>
              <div className="mt-4">
                <p className="text-sm text-gray-500">
                  Hourly Rate: <span className="font-semibold">${service.hourlyRate}</span>
                </p>
                <p className="text-sm text-gray-500">
                  Estimated Time: <span className="font-semibold">{service.estimatedTimeHours} hours</span>
                </p>
                <p className="text-sm text-gray-500">Available: {service.availability}</p>
              </div>
            </div>
            <button className="bg-green-500 text-white underline"><Link href={`hourly/${service.serviceName}`}>Details</Link></button>
          </div>
          


        ))}

      
      </div>
    </div>
  );
};

export default page;
