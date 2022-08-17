Blockly.Blocks["arm_init"] = {
  init: function () {
    this.jsonInit({
      type: "arm_init",
      message0: "thiết lập servo giữa %1 phải %2 trái %3 đầu gắp %4",
      previousStatement: null,
      nextStatement: null,
      args0: [
        {
          type: "field_dropdown",
          name: "base",
          options: [
            ["P8", "pin8"],
            ["P0", "pin0"],
            ["P1", "pin1"],
            ["P2", "pin2"],
            ["P9", "pin9"],
            ["P10", "pin10"],
            ["P11", "pin11"],
            ["P13", "pin13"],
            ["P14", "pin14"],
            ["P15", "pin15"],
          ],
        },
        {
          type: "field_dropdown",
          name: "right",
          options: [
            ["P9", "pin9"],
            ["P0", "pin0"],
            ["P1", "pin1"],
            ["P2", "pin2"],
            ["P8", "pin8"],
            ["P10", "pin10"],
            ["P11", "pin11"],
            ["P13", "pin13"],
            ["P14", "pin14"],
            ["P15", "pin15"],
          ],
        },
        {
          type: "field_dropdown",
          name: "left",
          options: [
            ["P10", "pin10"],
            ["P0", "pin0"],
            ["P1", "pin1"],
            ["P2", "pin2"],
            ["P8", "pin8"],
            ["P11", "pin11"],
            ["P13", "pin13"],
            ["P14", "pin14"],
            ["P15", "pin15"],
          ],
        },
        {
          type: "field_dropdown",
          name: "gripper",
          options: [
            ["P11", "pin11"],
            ["P0", "pin0"],
            ["P1", "pin1"],
            ["P2", "pin2"],
            ["P8", "pin8"],
            ["P9", "pin9"],
            ["P10", "pin10"],
            ["P13", "pin13"],
            ["P14", "pin14"],
            ["P15", "pin15"],
          ],
        },
      ],
      colour: "#154c79",
      tooltip: "",
      helpUrl: "",
    });
  },
  getDeveloperVars: function () {
    return ["arm"];
  },
};

Blockly.Blocks["arm_origin"] = {
  init: function () {
    this.jsonInit({
      type: "arm_origin",
      message0: "về tọa độ gốc",
      previousStatement: null,
      nextStatement: null,
      args0: [],
      colour: "#154c79",
      tooltip: "",
      helpUrl: "",
    });
  },
  getDeveloperVars: function () {
    return ["arm"];
  },
};

Blockly.Blocks["arm_moveGrip"] = {
  init: function () {
    this.jsonInit({
      type: "arm_moveGrip",
      message0: "%1 đầu gắp với tốc độ %2",
      previousStatement: null,
      nextStatement: null,
      args0: [
        {
          type: "field_dropdown",
          name: "action",
          options: [
            ["đóng", "90"],
            ["mở", "0"],
          ],
        },
        {
          type: "input_value",
          name: "speed",
          check: "Number",
        },
      ],
      colour: "#154c79",
      tooltip: "",
      helpUrl: "",
    });
  },
  getDeveloperVars: function () {
    return ["arm"];
  },
};

Blockly.Blocks["arm_moveBase"] = {
  init: function () {
    this.jsonInit({
      type: "arm_moveBase",
      message0: "xoay khớp giữa góc %1 (0-180) với tốc độ %2 (0-100)",
      args0: [
        {
          type: "input_value",
          name: "angle",
          check: "Number",
        },
        {
          type: "input_value",
          name: "speed",
          check: "Number",
        },
      ],
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: "#154c79",
      tooltip: "",
      helpUrl: "",
    });
  },
  getDeveloperVars: function () {
    return ["arm"];
  },
};

Blockly.Blocks["arm_moveRight"] = {
  init: function () {
    this.jsonInit({
      type: "arm_moveRight",
      message0: "xoay khớp bên phải góc %1 (50-180) với tốc độ %2 (0-100)",
      args0: [
        {
          type: "input_value",
          name: "angle",
          check: "Number",
        },
        {
          type: "input_value",
          name: "speed",
          check: "Number",
        },
      ],
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: "#154c79",
      tooltip: "",
      helpUrl: "",
    });
  },
  getDeveloperVars: function () {
    return ["arm"];
  },
};

Blockly.Blocks["arm_moveLeft"] = {
  init: function () {
    this.jsonInit({
      type: "arm_moveLeft",
      message0: "xoay khớp bên trái góc %1 (0-140) với tốc độ %2 (0-100)",
      args0: [
        {
          type: "input_value",
          name: "angle",
          check: "Number",
        },
        {
          type: "input_value",
          name: "speed",
          check: "Number",
        },
      ],
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: "#154c79",
      tooltip: "",
      helpUrl: "",
    });
  },
  getDeveloperVars: function () {
    return ["arm"];
  },
};

Blockly.Blocks["arm_moveKinematic"] = {
  init: function () {
    this.jsonInit({
      type: "arm_moveKinematic",
      message0:
        "di chuyển đầu gắp tới vị trí %1 trái/phải (0 - 180) độ %2 tới/lui (20 - 130 mm) %3 lên/xuống (-35 - 125 mm) %4 với tốc độ (0 - 100) %5",
      args0: [
        {
          type: "input_dummy",
        },
        {
          type: "input_value",
          check: "Number",
          name: "theta",
          value: 90,
        },
        {
          type: "input_value",
          check: "Number",
          name: "radius",
          value: 80,
        },
        {
          type: "input_value",
          check: "Number",
          name: "height",
          value: 80,
        },
        {
          type: "input_value",
          check: "Number",
          name: "speed",
          value: 100,
        },
      ],
      inputsInline: false,
      previousStatement: null,
      nextStatement: null,
      colour: "#154c79",
      tooltip: "",
      helpUrl: "",
    });
  },
  getDeveloperVars: function () {
    return ["arm"];
  },
};

Blockly.Blocks["arm_rotateBase"] = {
  init: function () {
    this.jsonInit({
      type: "arm_rotateBase",
      message0:
        "khớp giữa xoay %1 độ tốc độ %2 (ms) giới hạn góc %3 (0-180) độ",
      args0: [
        {
          type: "input_value",
          name: "change",
          check: "Number",
        },
        {
          type: "input_value",
          name: "speed",
          check: "Number",
        },
        {
          type: "input_value",
          name: "limit",
          check: "Number",
        },
      ],
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: "#154c79",
      tooltip: "",
      helpUrl: "",
    });
  },
};

Blockly.Blocks["arm_rotateRight"] = {
  init: function () {
    this.jsonInit({
      type: "arm_rotateRight",
      message0:
        "khớp phải xoay %1 độ tốc độ %2 (ms) giới hạn góc %3 (50-180) độ",
      args0: [
        {
          type: "input_value",
          name: "change",
          check: "Number",
        },
        {
          type: "input_value",
          name: "speed",
          check: "Number",
        },
        {
          type: "input_value",
          name: "limit",
          check: "Number",
        },
      ],
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: "#154c79",
      tooltip: "",
      helpUrl: "",
    });
  },
};

Blockly.Blocks["arm_rotateLeft"] = {
  init: function () {
    this.jsonInit({
      type: "arm_rotateLeft",
      message0:
        "khớp trái xoay %1 độ tốc độ %2 (ms) giới hạn góc %3 (0-140) độ",
      args0: [
        {
          type: "input_value",
          name: "change",
          check: "Number",
        },
        {
          type: "input_value",
          name: "speed",
          check: "Number",
        },
        {
          type: "input_value",
          name: "limit",
          check: "Number",
        },
      ],
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: "#154c79",
      tooltip: "",
      helpUrl: "",
    });
  },
};
// Python Code

Blockly.Python["arm_init"] = function (block) {
  // TODO: Assemble Python into code variable.
  var base = block.getFieldValue("base");
  var right = block.getFieldValue("right");
  var left = block.getFieldValue("left");
  var gripper = block.getFieldValue("gripper");
  Blockly.Python.definitions_["import_arm"] = "from yolobit_arm import *";
  Blockly.Python.definitions_["create_arm"] =
    "arm = Arm(" + base + ", " + right + ", " + left + ", " + gripper + ")";
  var code = "";
  return code;
};

Blockly.Python["arm_origin"] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = "arm.origin()\n";
  return code;
};

Blockly.Python["arm_moveGrip"] = function (block) {
  // TODO: Assemble Python into code variable.
  var action = block.getFieldValue("action");
  var speed = Blockly.Python.valueToCode(
    block,
    "speed",
    Blockly.Python.ORDER_ATOMIC
  );
  var code = "arm.moveGripper(" + action + ", " + speed + ")\n";
  return code;
};

Blockly.Python["arm_moveBase"] = function (block) {
  var angle = Blockly.Python.valueToCode(
    block,
    "angle",
    Blockly.Python.ORDER_ATOMIC
  );
  var speed = Blockly.Python.valueToCode(
    block,
    "speed",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = "arm.moveBase(" + angle + ", " + speed + ")\n";
  return code;
};

Blockly.Python["arm_moveRight"] = function (block) {
  var angle = Blockly.Python.valueToCode(
    block,
    "angle",
    Blockly.Python.ORDER_ATOMIC
  );
  var speed = Blockly.Python.valueToCode(
    block,
    "speed",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = "arm.moveRight(" + angle + ", " + speed + ")\n";
  return code;
};

Blockly.Python["arm_moveLeft"] = function (block) {
  var angle = Blockly.Python.valueToCode(
    block,
    "angle",
    Blockly.Python.ORDER_ATOMIC
  );
  var speed = Blockly.Python.valueToCode(
    block,
    "speed",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = "arm.moveLeft(" + angle + ", " + speed + ")\n";
  return code;
};

Blockly.Python["arm_moveKinematic"] = function (block) {
  var theta = Blockly.Python.valueToCode(
    block,
    "theta",
    Blockly.Python.ORDER_ATOMIC
  );
  var radius = Blockly.Python.valueToCode(
    block,
    "radius",
    Blockly.Python.ORDER_ATOMIC
  );
  var height = Blockly.Python.valueToCode(
    block,
    "height",
    Blockly.Python.ORDER_ATOMIC
  );
  var speed = Blockly.Python.valueToCode(
    block,
    "speed",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code =
    "arm.moveKinematic(" +
    theta +
    ", " +
    radius +
    ", " +
    height +
    ", " +
    speed +
    ")\n";
  return code;
};

Blockly.Python["arm_rotateBase"] = function (block) {
  var change = Blockly.Python.valueToCode(
    block,
    "change",
    Blockly.Python.ORDER_ATOMIC
  );
  var speed = Blockly.Python.valueToCode(
    block,
    "speed",
    Blockly.Python.ORDER_ATOMIC
  );
  var limit = Blockly.Python.valueToCode(
    block,
    "limit",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = "arm.rotateBase(" + change + ", " + speed + ", " + limit + ")\n";
  return code;
};

Blockly.Python["arm_rotateRight"] = function (block) {
  var change = Blockly.Python.valueToCode(
    block,
    "change",
    Blockly.Python.ORDER_ATOMIC
  );
  var speed = Blockly.Python.valueToCode(
    block,
    "speed",
    Blockly.Python.ORDER_ATOMIC
  );
  var limit = Blockly.Python.valueToCode(
    block,
    "limit",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = "arm.rotateRight(" + change + ", " + speed + ", " + limit + ")\n";
  return code;
};

Blockly.Python["arm_rotateLeft"] = function (block) {
  var change = Blockly.Python.valueToCode(
    block,
    "change",
    Blockly.Python.ORDER_ATOMIC
  );
  var speed = Blockly.Python.valueToCode(
    block,
    "speed",
    Blockly.Python.ORDER_ATOMIC
  );
  var limit = Blockly.Python.valueToCode(
    block,
    "limit",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = "arm.rotateLeft(" + change + ", " + speed + ", " + limit + ")\n";
  return code;
};
