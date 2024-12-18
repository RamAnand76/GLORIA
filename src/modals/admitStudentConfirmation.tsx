import Popup from '@/components/modal/modal';
import Switch from '@/components/switch';
import { admitStudents } from '@/services/studentService';
import { notify } from '@/utils/helpers/helpers';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export interface AdmitStudentConfirmationProps {
  isOpen: boolean;
  admittedState: TAdmittedStudent;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setAdmittedState: React.Dispatch<React.SetStateAction<TAdmittedStudent>>;
}
const AdmitStudentConfirmation: React.FC<AdmitStudentConfirmationProps> = ({
  isOpen,
  admittedState,
  setIsOpen,
  setAdmittedState,
}) => {
  const navigate = useNavigate();
  const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);

  /**
   * @function handleAdmitStudent
   * @description on admitting student , navigate to student details to update details
   */
  const handleAdmitStudent = () => {
    if (!admittedState.state) {
      setIsFormSubmitting(true);
      admitStudents(admittedState.id)
        .then(() => {
          setIsOpen(false);
          navigate(`edit-student/${admittedState.id}`, {
            state: { id: admittedState.id },
          });
        })
        .finally(() => setIsFormSubmitting(false));
    } else {
      notify('Student is already admitted', { type: 'warning' });
    }
  };

  return (
    <Popup
      title="Admit Student"
      onSubmit={handleAdmitStudent}
      isOpen={isOpen}
      isSubmitting={isFormSubmitting}
      setOpen={setIsOpen}
    >
      <div className="flex items-center justify-between">
        <p>Admit the student?</p>
        <Switch
          isSelected={admittedState.state}
          onValueChange={(e) => {
            !admittedState.state &&
              setAdmittedState((cv) => ({ ...cv, is_admitted: e }));
          }}
        />
      </div>
    </Popup>
  );
};

export default AdmitStudentConfirmation;
