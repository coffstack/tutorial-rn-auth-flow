import {AppParamList} from './AppStack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppParamList {}
  }
}
