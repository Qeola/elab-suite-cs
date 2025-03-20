//  Profile Data
interface MiniiconsType {
  id: number;
  icon: string;
  tooltip: string;
}

const Miniicons: MiniiconsType[] = [
  {
    id: 1,
    icon: "tabler:user",
    tooltip: "HR",
  },
  {
    id: 2,
    icon: "mdi:human-male-board-poll",
    tooltip: "Accounting",
  },
];

export default Miniicons;
