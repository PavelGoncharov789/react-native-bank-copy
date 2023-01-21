import { TypeRootStackPAramList } from './app/navigation/types';
declare global {
  namespace ReactNAvigation {
    interface RootParamList extends TypeRootStackPAramList {}
  }
}