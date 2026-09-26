import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";

export default function Page({ id }: { id: string }) {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Customers", href: "/dashboard/customers" },
          {
            label: "Edit Customers",
            href: `/dashboard/customers/${id}/edit`,
            active: true,
          },
        ]}
      />
      <div>Edit Customers</div>
    </main>
  );
}
