import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Report from './report';
import DetailOutcomeScreen from './Detail/detailspend';
import DetailEarnScreen from './Detail/detailearn';

const Stack = createStackNavigator();

const ReportScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Report">
      <Stack.Screen name="Báo cáo theo tháng" component={Report} />
      <Stack.Screen name="Ăn uống T3" component={DetailOutcomeScreen} />
      <Stack.Screen name="Tiền lương T3" component={DetailEarnScreen} />
    </Stack.Navigator>
  );
};

export default ReportScreen;
