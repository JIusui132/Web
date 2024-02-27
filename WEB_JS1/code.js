function triangle(val1, type1, val2, type2) {
    const validTypes = ["leg", "hypotenuse", "adjacent", "opposite", "angle"];
    if (!validTypes.includes(type1) || !validTypes.includes(type2)) {
        console.log("Будь ласка, перечитайте інструкцію та введіть правильні типи.");
        return "failed";
    }

    if (val1 <= 0 || val2 <= 0) {
        console.log("Значення мають бути більше 0.");
        return "failed";
    }

    let c, a, b, alpha, beta;
    switch (type1) {
        case "leg":
            a = val1;
            switch (type2) {
                case "leg":
                    b = val2;
                    c = Math.sqrt(a ** 2 + b ** 2);
                    alpha = Math.atan(b / a) * 180 / Math.PI;
                    beta = 90 - alpha;
                    break;
                case "hypotenuse":
                    c = val2;
                    if (a >= c) {
                        console.log("Катет не може бути більший або рівний гіпотенузі.");
                        return "failed";
                    }
                    b = Math.sqrt(c ** 2 - a ** 2);
                    alpha = Math.atan(a / b) * 180 / Math.PI;
                    beta = 90 - alpha;
                    break;
                case "adjacent":
                    beta = val2;
                    if (val2 >= 90 || val2 <= 0) return "failed";
                    b = a / Math.tan(val2 * Math.PI / 180);
                    c = Math.sqrt(a ** 2 + b ** 2);
                    alpha = 90 - beta;
                    break;
                case "opposite":
                    alpha = val2;
                    if (val2 >= 90 || val2 <= 0) return "failed";
                    b = a * Math.tan(val2 * Math.PI / 180);
                    c = Math.sqrt(a ** 2 + b ** 2);
                    beta = 90 - alpha;
                    break;
                case "angle":
                    return "failed";
            }
            break;
        case "hypotenuse":
            c = val1;
            switch (type2) {
                case "leg":
                    a = val2;
                    if (a >= c) {
                        console.log("Катет не може бути більший або рівний гіпотенузі.");
                        return "failed";
                    }
                    b = Math.sqrt(c ** 2 - a ** 2);
                    alpha = Math.acos(a / c) * 180 / Math.PI;
                    beta = 90 - alpha;
                    break;
                case "hypotenuse":
                    return "failed";
                case "adjacent":
                    beta = val2;
                    if (val2 >= 90 || val2 <= 0) return "failed";
                    a = c * Math.cos(val2 * Math.PI / 180);
                    b = Math.sqrt(c ** 2 - a ** 2);
                    alpha = 90 - beta;
                    break;
                case "opposite":
                    alpha = val2;
                    if (val2 >= 90 || val2 <= 0) return "failed";
                    b = c * Math.sin(val2 * Math.PI / 180);
                    a = Math.sqrt(c ** 2 - b ** 2);
                    beta = 90 - alpha;
                    break;
                case "angle":
                    return "failed";
            }
            break;
        case "adjacent":
            beta = val1;
            if (beta >= 90 || beta <= 0) {
                console.log("Прилеглий кут має бути менше за 90 градусів та більше за 0.");
                return "failed";
            }
            switch (type2) {
                case "leg":
                    a = val2;
                    if (a <= 0) {
                        console.log("Катет має бути більше 0.");
                        return "failed";
                    }
                    b = a * Math.tan(beta * Math.PI / 180);
                    c = a / Math.cos(beta * Math.PI / 180);
                    alpha = 90 - beta;
                    break;
                case "hypotenuse":
                    c = val2;
                    if (c <= 0) {
                        console.log("Гіпотенуза має бути більше 0.");
                        return "failed";
                    }
                    a = c * Math.cos(beta * Math.PI / 180);
                    b = Math.sqrt(c ** 2 - a ** 2);
                    alpha = 90 - beta;
                    break;
                case "adjacent":
                    return "failed";
                case "opposite":
                    return "failed";
                case "angle":
                    return "failed";
            }
            break;
        case "opposite":
            alpha = val1;
            if (alpha >= 90 || alpha <= 0) {
                console.log("Протилежний кут має бути менше за 90 градусів та більше за 0.");
                return "failed";
            }
            switch (type2) {
                case "leg":
                    a = val2;
                    if (a <= 0) {
                        console.log("Катет має бути більше 0.");
                        return "failed";
                    }
                    b = a * Math.tan(alpha * Math.PI / 180);
                    c = a / Math.sin(alpha * Math.PI / 180);
                    beta = 90 - alpha;
                    break;
                case "hypotenuse":
                    c = val2;
                    if (c <= 0) {
                        console.log("Гіпотенуза має бути більше 0.");
                        return "failed";
                    }
                    b = c * Math.sin(alpha * Math.PI / 180);
                    a = Math.sqrt(c ** 2 - b ** 2);
                    beta = 90 - alpha;
                    break;
                case "adjacent":
                    return "failed";
                case "opposite":
                    return "failed";
                case "angle":
                    return "failed";
            }
            break;
    }

    console.log(`c = ${c}, a = ${a}, b = ${b}, alpha = ${alpha}, beta = ${beta}`);
    return "success";
}


triangle(3, "leg", 5, "hypotenuse");
