import { TypeRootStackPAramList } from './app/navigation/types';
declare global {
  namespace ReactNavigation {
    interface RootParamList extends TypeRootStackPAramList {}
  }
}