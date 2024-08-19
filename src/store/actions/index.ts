import { IStore } from '../store';

const appStore = (
  set: (
    partial: Partial<IStore> | ((state: IStore) => Partial<IStore>),
    replace?: boolean
  ) => void
) => ({
  bulkRegisterData: {
    download_link: '',
    successful_registrations: 0,
    failed_registrations: 0,
  },
  setBulkRegisterData: (data: IBulkRegister_R) =>
    set(() => ({ bulkRegisterData: data })),
});

export default appStore;
