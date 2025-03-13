//  Profile Data
interface MiniiconsType {
  id: number;
  icon: string;
  tooltip: string;
}

const Miniicons: MiniiconsType[] = [
  {
    id: 1,
    icon: "solar:layers-line-duotone",
    tooltip: "HR",
  },
  {
    id: 2,
    icon: "healthicons:low-income-level-outline",
    tooltip: "Accounting",
  },
];

export default Miniicons;
