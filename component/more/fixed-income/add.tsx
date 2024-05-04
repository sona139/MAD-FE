import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { categoryIncomeList } from "../../home/income";
import { intervals } from "../fixed-outcome";

export default function AddFixedIncome() {
  const [title, setTitle] = useState("");
  const [money, setMoney] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(
    categoryIncomeList[0]
  );
  const [selectedInterval, setSelectedInterval] = useState(intervals.daily);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handlePressCategory = (v) => {
    setSelectedCategory(v);
  };

  const handleAdd = () => {};

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View
        style={{
          paddingTop: 16,
          paddingLeft: 40,
          paddingRight: 40,
          display: "flex",
          flexDirection: "column",
          gap: 16,
          flex: 1,
          position: "relative",
        }}
      >
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Text style={{ fontSize: 18 }}>Tiêu đề: </Text>
          <TextInput
            multiline={true}
            value={title}
            onChangeText={setTitle}
            placeholder="Nhập tiêu đề..."
            style={{
              fontSize: 18,
              borderColor: "gray",
              borderWidth: 1,
              width: 250,
              borderRadius: 5,
              padding: 4,
            }}
          />
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Text style={{ fontSize: 18 }}>Số tiền: </Text>
          <TextInput
            multiline={true}
            keyboardType="numeric"
            value={money.toString()}
            onChangeText={(v) => setMoney(Number(v))}
            placeholder="Số tiền chi..."
            style={{
              fontSize: 18,
              borderColor: "gray",
              borderWidth: 1,
              width: 250,
              borderRadius: 5,
              padding: 4,
            }}
          />
        </View>
        <View>
          <Text style={{ fontSize: 18 }}>Danh mục:</Text>
          <View
            style={{
              marginTop: 8,
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 6,
            }}
          >
            {categoryIncomeList.map((category, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => handlePressCategory(category)}
                >
                  <View
                    style={{
                      width: 107,
                      height: 50,
                      borderRadius: 5,
                      padding: 4,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor:
                        category.id === selectedCategory.id
                          ? "#2089DC"
                          : "#fff",
                      borderWidth: 1,
                      borderColor:
                        category.id === selectedCategory.id
                          ? "#2089DC"
                          : "#000",
                    }}
                  >
                    <Text
                      numberOfLines={1}
                      style={{
                        color:
                          category.id === selectedCategory.id ? "#fff" : "#000",
                      }}
                    >
                      {category.content}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}

            <TouchableOpacity onPress={() => {}}>
              <View
                style={{
                  width: 104,
                  height: 50,
                  borderRadius: 5,
                  padding: 4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#fff",
                  borderWidth: 1,
                  borderColor: "#808080",
                }}
              >
                <Text numberOfLines={1} style={{ color: "#808080" }}>
                  {"Chỉnh sửa >"}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 18 }}>Lặp lại:</Text>
          <View
            style={{
              marginTop: 8,
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 6,
            }}
          >
            {Object.values(intervals).map((interval, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => setSelectedInterval(interval)}
                >
                  <View
                    style={{
                      width: 107,
                      height: 50,
                      borderRadius: 5,
                      padding: 4,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor:
                        interval === selectedInterval ? "#2089DC" : "#fff",
                      borderWidth: 1,
                      borderColor:
                        interval === selectedInterval ? "#2089DC" : "#000",
                    }}
                  >
                    <Text
                      numberOfLines={1}
                      style={{
                        color: interval === selectedInterval ? "#fff" : "#000",
                      }}
                    >
                      {interval}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Text style={{ fontSize: 18 }}>Bắt đầu: </Text>
          <DateTimePicker
            value={startDate}
            onChange={(e, date) => {
              setStartDate(date);
            }}
          />
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Text style={{ fontSize: 18 }}>Kết thúc: </Text>
          <DateTimePicker
            value={endDate}
            onChange={(e, date) => {
              setEndDate(date);
            }}
          />
        </View>

        <View style={styles.buttonAddContainer}>
          <TouchableOpacity onPress={handleAdd}>
            <View style={styles.buttonAddView}>
              <Text style={styles.buttonAdd}>Thêm khoản thu cố định</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  buttonAddContainer: {
    flex: 1,
    position: "absolute",
    bottom: 20,
    left: 40,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 30,
    gap: 12,
  },
  buttonAddView: {
    backgroundColor: "#21BA45",
    paddingHorizontal: 24,
    borderRadius: 30,
  },
  buttonAdd: {
    textAlign: "center",
    paddingVertical: 16,
    fontSize: 18,
    color: "#fff",
  },
});
