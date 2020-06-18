import { StepData } from '../components/molecules/ProgressBar/ProgressBar';

export const useButtonText = (
  task: StepData | undefined,
  stepLength: number
) => {
  const currentId = task?.id;
  const status = task?.status;
  let buttonText = 'Continue';
  if (currentId === 1 && status === 'Pending') {
    buttonText = 'Begin Task';
  }
  if (currentId === stepLength) {
    buttonText = 'Finish';
  }
  return buttonText;
};
