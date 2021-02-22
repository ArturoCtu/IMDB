import React from "react";
import { Row } from "antd";
import { Button } from "shared/atoms/Button";

import {
  CaretUpOutlined,
  CaretDownFilled,
  StarFilled,
  SortAscendingOutlined,
  SortDescendingOutlined,
} from "@ant-design/icons";

interface IClusterFunctions {
  sortByRatingD: () => void;
  sortByRatingA: () => void;
  sortAlphabeticalD: () => void;
  sortAlphabeticalA: () => void;
}

export const SortingCluster: React.FC<IClusterFunctions> = ({
  sortByRatingD,
  sortByRatingA,
  sortAlphabeticalD,
  sortAlphabeticalA,
}) => {
  return (
    <Row justify="center">
      <Button onClick={sortByRatingD}>
        <StarFilled /> <CaretDownFilled />
      </Button>
      <Button onClick={sortByRatingA}>
        <StarFilled /> <CaretUpOutlined />
      </Button>
      <Button onClick={sortAlphabeticalD}>
        <SortAscendingOutlined />
      </Button>
      <Button onClick={sortAlphabeticalA}>
        <SortDescendingOutlined />
      </Button>
    </Row>
  );
};
