const page = ({ params }) => {
  const data = [
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

  // Decode the URL-encoded params.id
  const decodedId = decodeURIComponent(params.id);

  // Filter the data using the decoded params.id
  const filteredData = data.find((item) => item.serviceName === decodedId);
  console.log("Route Param:", decodedId); // Now this should match correctly
  console.log("Data Service Names:", data.map((item) => item.serviceName));
  
  // If no data is found, return a message
  if (!filteredData) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">Service Not Found</h1>
        <p className="mt-4">No service found with the provided service: {decodedId}</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{filteredData.serviceName}</h1>
      <p className="mt-4">{filteredData.description}</p>
      <p className="mt-2">
        <strong>Hourly Rate:</strong> ${filteredData.hourlyRate}
      </p>
      <p className="mt-2">
        <strong>Estimated Time:</strong> {filteredData.estimatedTimeHours} hours
      </p>
      <p className="mt-2">
        <strong>Availability:</strong> {filteredData.availability}
      </p>
    </div>
  );
};

export default page;
