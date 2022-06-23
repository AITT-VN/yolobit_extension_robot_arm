Blockly.Blocks['arm_init'] = {
  init: function() {
    this.jsonInit(
      {
        type: "arm_init",
        message0: "thiết lập servo giữa %1 phải %2 trái %3 đầu gắp %4",
        previousStatement: null,
        nextStatement: null,
        args0: [
          {
            type: "field_dropdown",
            name: "base",
            options: [
              ["S1", "0"],
              ["S2", "1"],
              ["S3", "2"],
              ["S4", "3"],
              ["S5", "4"],
              ["S6", "5"],
              ["S7", "6"],
              ["S8", "7"],
            ],
          },
          {
            type: "field_dropdown",
            name: "right",
            options: [
              ["S2", "1"],
              ["S1", "0"],
              ["S3", "2"],
              ["S4", "3"],
              ["S5", "4"],
              ["S6", "5"],
              ["S7", "6"],
              ["S8", "7"],
            ],
          },
          {
            type: "field_dropdown",
            name: "left",
            options: [
              ["S3", "2"],
              ["S1", "0"],
              ["S2", "1"],
              ["S4", "3"],
              ["S5", "4"],
              ["S6", "5"],
              ["S7", "6"],
              ["S8", "7"],
            ],
          },
          {
            type: "field_dropdown",
            name: "gripper",
            options: [
              ["S4", "3"],
              ["S1", "0"],
              ["S2", "1"],
              ["S3", "2"],
              ["S5", "4"],
              ["S6", "5"],
              ["S7", "6"],
              ["S8", "7"],
            ],
          },
        ],
        colour: "#154c79",
        tooltip: "",
        helpUrl: ""
      }
    )
  },
  getDeveloperVars: function() {
    return ['arm'];
  }
};

Blockly.Blocks['arm_origin'] = {
  init: function() {
    this.jsonInit(
      {
        type: "arm_origin",
        message0: "về tọa độ gốc",
        previousStatement: null,
        nextStatement: null,
        args0: [
        ],
        colour: "#154c79",
        tooltip: "",
        helpUrl: ""
      }
    )
  },
  getDeveloperVars: function() {
    return ['arm'];
  }
};

Blockly.Blocks['arm_moveGrip'] = {
  init: function() {
    this.jsonInit(
      {
        type: "arm_moveGrip",
        message0: "%1 đầu gắp với tốc độ %2",
        previousStatement: null,
        nextStatement: null,
        args0: [
          {
            type: "field_dropdown",
            name: "action",
            options: [
              ["Đóng", "90"],
              ["Mở", "0"]
            ],
          },
          {
            "type": "input_value",
            "name": "speed",
            "check": "Number"
          }
        ],
        colour: "#154c79",
        tooltip: "",
        helpUrl: ""
      }
    )
  },
  getDeveloperVars: function() {
    return ['arm'];
  }
};

Blockly.Blocks['arm_moveBase'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "arm_moveBase",
        "message0": "xoay khớp giữa góc %1 (0-180) với tốc độ %2 (0-100)",
        "args0": [
          {
            "type": "input_value",
            "name": "angle",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "speed",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#154c79",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  },
  getDeveloperVars: function() {
    return ['arm'];
  }
};

Blockly.Blocks['arm_moveRight'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "arm_moveRight",
        "message0": "xoay khớp bên phải góc %1 (50-180) với tốc độ %2 (0-100)",
        "args0": [
          {
            "type": "input_value",
            "name": "angle",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "speed",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#154c79",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  },
  getDeveloperVars: function() {
    return ['arm'];
  }
};

Blockly.Blocks['arm_moveLeft'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "arm_moveLeft",
        "message0": "xoay khớp bên trái góc %1 (0-140) với tốc độ %2 (0-100)",
        "args0": [
          {
            "type": "input_value",
            "name": "angle",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "speed",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#154c79",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  },
  getDeveloperVars: function() {
    return ['arm'];
  }
};

Blockly.Blocks['arm_moveKinematic'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "arm_moveKinematic",
        "message0": "di chuyển đầu gắp tới vị trí O %1 R %2 Z %3 với tốc độ %4 (0-100)",
        "args0": [
          {
            "type": "input_value",
            "name": "theta",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "radius",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "height",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "speed",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#154c79",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  },
  getDeveloperVars: function() {
    return ['arm'];
  }
};

// Python Code

Blockly.Python['arm_init'] = function(block) {
  // TODO: Assemble Python into code variable.
  var base = block.getFieldValue('base');
  var right = block.getFieldValue('right');
  var left = block.getFieldValue('left');
  var gripper = block.getFieldValue('gripper');
  Blockly.Python.definitions_['import_arm'] = 'from arm import *';
  Blockly.Python.definitions_['create_arm'] = 'arm = Arm(' + base + ', ' + right + ', ' + left + ', ' + gripper + ')';
  var code = '';
  return code;
};

Blockly.Python['arm_origin'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = "arm.origin()\n";
  return code;
};

Blockly.Python['arm_moveGrip'] = function(block) {
  // TODO: Assemble Python into code variable.
  var action = block.getFieldValue('action');
  var speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var code = "arm.moveGripper(" + action + ", " + speed + ")\n";
  return code;
};

Blockly.Python["arm_moveBase"] = function (block) {
  var angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);
  var speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "arm.moveBase(" + angle + ", " + speed + ")\n";
  return code;
};

Blockly.Python["arm_moveRight"] = function (block) {
  var angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);
  var speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "arm.moveRight(" + angle + ", " + speed + ")\n";
  return code;
};

Blockly.Python["arm_moveLeft"] = function (block) {
  var angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);
  var speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "arm.moveLeft(" + angle + ", " + speed + ")\n";
  return code;
};

Blockly.Python["arm_moveKinematic"] = function (block) {
  var theta = Blockly.Python.valueToCode(block, 'theta', Blockly.Python.ORDER_ATOMIC);
  var radius = Blockly.Python.valueToCode(block, 'radius', Blockly.Python.ORDER_ATOMIC);
  var height = Blockly.Python.valueToCode(block, 'height', Blockly.Python.ORDER_ATOMIC);
  var speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "arm.moveKinematic(" + theta + ", " + radius + ", " + height + ", " + speed + ")\n";
  return code;
};