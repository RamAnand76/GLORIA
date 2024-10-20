import { create } from 'zustand';
import appStore from './actions';

export interface IStore {
  bulkRegisterData: IBulkRegister_R;
  userDetails: IUserDetails;
  selectedRowIds: string[];
  courseDetails: IAddCollege;
  setCourseDetails: (data: IAddCollege) => void;
  setSelectedRowIds: (id: string[]) => void;
  setBulkRegisterData: (data: IBulkRegister_R) => void;
  setUserDetails: (data: IUserDetails) => void;
}

const useStore = create<IStore>()(appStore);

export default useStore;
