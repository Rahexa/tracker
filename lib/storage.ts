import { Deliverable, Month, Week } from "@/data/learningPlan";

export function saveProgress(months: Month[]): void {
  if (typeof window !== "undefined") {
    localStorage.setItem("learning-progress", JSON.stringify(months));
  }
}

export function loadProgress(originalPlan: Month[]): Month[] {
  if (typeof window === "undefined") {
    return originalPlan;
  }

  const saved = localStorage.getItem("learning-progress");
  if (!saved) {
    return originalPlan;
  }

  try {
    const savedData: Month[] = JSON.parse(saved);
    // Merge saved progress with original plan structure
    return originalPlan.map((month) => {
      const savedMonth = savedData.find((m) => m.id === month.id);
      if (!savedMonth) return month;

      return {
        ...month,
        weeks: month.weeks.map((week) => {
          const savedWeek = savedMonth.weeks.find((w) => w.id === week.id);
          if (!savedWeek) return week;

          return {
            ...week,
            deliverables: week.deliverables.map((deliverable) => {
              const savedDeliverable = savedWeek.deliverables.find(
                (d) => d.id === deliverable.id
              );
              return savedDeliverable || deliverable;
            }),
          };
        }),
      };
    });
  } catch {
    return originalPlan;
  }
}

export function toggleDeliverable(
  months: Month[],
  monthId: string,
  weekId: string,
  deliverableId: string
): Month[] {
  return months.map((month) => {
    if (month.id !== monthId) return month;

    return {
      ...month,
      weeks: month.weeks.map((week) => {
        if (week.id !== weekId) return week;

        return {
          ...week,
          deliverables: week.deliverables.map((deliverable) => {
            if (deliverable.id !== deliverableId) return deliverable;
            return { ...deliverable, completed: !deliverable.completed };
          }),
        };
      }),
    };
  });
}

export function calculateProgress(months: Month[]): {
  overall: number;
  byMonth: { monthId: string; progress: number }[];
} {
  let totalDeliverables = 0;
  let completedDeliverables = 0;
  const byMonth: { monthId: string; progress: number }[] = [];

  months.forEach((month) => {
    let monthTotal = 0;
    let monthCompleted = 0;

    month.weeks.forEach((week) => {
      week.deliverables.forEach((deliverable) => {
        monthTotal++;
        totalDeliverables++;
        if (deliverable.completed) {
          monthCompleted++;
          completedDeliverables++;
        }
      });
    });

    byMonth.push({
      monthId: month.id,
      progress: monthTotal > 0 ? (monthCompleted / monthTotal) * 100 : 0,
    });
  });

  return {
    overall: totalDeliverables > 0 ? (completedDeliverables / totalDeliverables) * 100 : 0,
    byMonth,
  };
}

