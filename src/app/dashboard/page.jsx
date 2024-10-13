import Dashboard from "@/components/Dashboard/Dashboard";
import DataTable from "@/components/Dashboard/DataTable";
import NavbarDashboard from "@/components/Dashboard/NavbarDashboard";

import { payments } from "./data-table";
import { columns } from "./columns";

const Page = async () => {
	return (
		<>
			<NavbarDashboard />
			<Dashboard />
			<DataTable columns={columns} data={payments} />
		</>
	);
};

export default Page;
