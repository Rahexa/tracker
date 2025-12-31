import { Month, Task, Topic, Week } from "@/data/learningPlan";

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
            topics: week.topics.map((topic) => {
              const savedTopic = savedWeek.topics.find((t) => t.id === topic.id);
              if (!savedTopic) return topic;

              return {
                ...topic,
                tasks: topic.tasks.map((task) => {
                  const savedTask = savedTopic.tasks.find((t) => t.id === task.id);
                  return savedTask || task;
                }),
              };
            }),
          };
        }),
      };
    });
  } catch {
    return originalPlan;
  }
}

export function toggleTask(
  months: Month[],
  monthId: string,
  weekId: string,
  topicId: string,
  taskId: string
): Month[] {
  return months.map((month) => {
    if (month.id !== monthId) return month;

    return {
      ...month,
      weeks: month.weeks.map((week) => {
        if (week.id !== weekId) return week;

        return {
          ...week,
          topics: week.topics.map((topic) => {
            if (topic.id !== topicId) return topic;

            return {
              ...topic,
              tasks: topic.tasks.map((task) => {
                if (task.id !== taskId) return task;
                return { ...task, completed: !task.completed };
              }),
            };
          }),
        };
      }),
    };
  });
}

export function calculateProgress(months: Month[]): {
  overall: number;
  byMonth: { monthId: string; progress: number }[];
  byWeek: { weekId: string; progress: number }[];
} {
  let totalTasks = 0;
  let completedTasks = 0;
  const byMonth: { monthId: string; progress: number }[] = [];
  const byWeek: { weekId: string; progress: number }[] = [];

  months.forEach((month) => {
    let monthTotal = 0;
    let monthCompleted = 0;

    month.weeks.forEach((week) => {
      let weekTotal = 0;
      let weekCompleted = 0;

      week.topics.forEach((topic) => {
        topic.tasks.forEach((task) => {
          monthTotal++;
          weekTotal++;
          totalTasks++;
          if (task.completed) {
            monthCompleted++;
            weekCompleted++;
            completedTasks++;
          }
        });
      });

      byWeek.push({
        weekId: week.id,
        progress: weekTotal > 0 ? (weekCompleted / weekTotal) * 100 : 0,
      });
    });

    byMonth.push({
      monthId: month.id,
      progress: monthTotal > 0 ? (monthCompleted / monthTotal) * 100 : 0,
    });
  });

  return {
    overall: totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0,
    byMonth,
    byWeek,
  };
}
