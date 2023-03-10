import typia from "../../../../src";
import { _test_message } from "../../../internal/_test_message";
import { ObjectUnionComposite } from "../../../structures/ObjectUnionComposite";

export const test_message_ObjectUnionComposite = _test_message(
    "ObjectUnionComposite",
    'syntax = "proto3";\n\nmessage ObjectUnionComposite {\n    message IPoint {\n        double x = 1;\n        double y = 2;\n    }\n\n    message ILine {\n        ObjectUnionComposite.IPoint p1 = 1;\n        ObjectUnionComposite.IPoint p2 = 2;\n    }\n\n    message ITriangle {\n        ObjectUnionComposite.IPoint p1 = 1;\n        ObjectUnionComposite.IPoint p2 = 2;\n        ObjectUnionComposite.IPoint p3 = 3;\n    }\n\n    message IRectangle {\n        ObjectUnionComposite.IPoint p1 = 1;\n        ObjectUnionComposite.IPoint p2 = 2;\n        ObjectUnionComposite.IPoint p3 = 3;\n        ObjectUnionComposite.IPoint p4 = 4;\n    }\n\n    message IPolyline {\n        repeated ObjectUnionComposite.IPoint points = 1;\n    }\n\n    message IPolygon {\n        ObjectUnionComposite.IPolyline outer = 1;\n        repeated ObjectUnionComposite.IPolyline inner = 2;\n    }\n\n    message IPointedShape {\n        repeated ObjectUnionComposite.IPoint outer = 1;\n        ObjectUnionComposite.IPoint inner = 2;\n    }\n\n    message ICircle {\n        ObjectUnionComposite.IPoint centroid = 1;\n        double radius = 2;\n    }\n}\n\nmessage __Main {\n    repeated Array.Element_lt__lp_ObjectUnionComposite.ICircle_space__or__space_ObjectUnionComposite.ILine_space__or__space_ObjectUnionComposite.IPoint_space__or__space_ObjectUnionComposite.IPointedShape_space__or__space_ObjectUnionComposite.IPolygon_space__or__space_ObjectUnionComposite.IPolyline_space__or__space_ObjectUnionComposite.IRectangle_space__or__space_ObjectUnionComposite.ITriangle_rp__gt_ value = 1;\n}\n\nmessage Array {\n    message Element_lt__lp_ObjectUnionComposite {\n        message ICircle_space__or__space_ObjectUnionComposite {\n            message ILine_space__or__space_ObjectUnionComposite {\n                message IPoint_space__or__space_ObjectUnionComposite {\n                    message IPointedShape_space__or__space_ObjectUnionComposite {\n                        message IPolygon_space__or__space_ObjectUnionComposite {\n                            message IPolyline_space__or__space_ObjectUnionComposite {\n                                message IRectangle_space__or__space_ObjectUnionComposite {\n                                    message ITriangle_rp__gt_ {\n                                        oneof value {\n                                            ObjectUnionComposite.IPoint value_o0 = 1;\n                                            ObjectUnionComposite.ILine value_o1 = 2;\n                                            ObjectUnionComposite.ITriangle value_o2 = 3;\n                                            ObjectUnionComposite.IRectangle value_o3 = 4;\n                                            ObjectUnionComposite.IPolyline value_o4 = 5;\n                                            ObjectUnionComposite.IPolygon value_o5 = 6;\n                                            ObjectUnionComposite.IPointedShape value_o6 = 7;\n                                            ObjectUnionComposite.ICircle value_o7 = 8;\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n}',
);