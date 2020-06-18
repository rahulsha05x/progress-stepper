import { StepData } from './ProgressBar';

const useGetCompleted = (steps: StepData[], completeFlag: string) => {
  const numberOfSteps = steps.length;
  const completedTask: StepData[] = steps.filter(
    (step) => step.status === completeFlag
  );
  const completedLen: number = completedTask.length;
  return {
    numberOfSteps,
    completedLen,
  };
};

export default useGetCompleted;
