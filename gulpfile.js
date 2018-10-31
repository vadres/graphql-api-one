const gulp  = require("gulp")
const clean = require("gulp-clean")
const ts    = require("gulp-typescript")

const tsProject = ts.createProject("tsconfig.json")

gulp.task("scripts", ["static"], () => {
    const result = tsProject.src()
                            .pipe(tsProject())
    return result.js 
                 .pipe(gulp.dest("dist"))                         
})

gulp.task("clean", () => {
    return gulp.src("dist/*")
               .pipe(clean())
})

gulp.task("static", ["clean"], () => {
    return gulp.src("src/**/*.json")
               .pipe(gulp.dest("dist"))
})

gulp.task("build", ["scripts"]);

gulp.task("watch", () => {
    return gulp.watch(["src/**/*.ts", "src/**/*.json"], ["build"])
})

gulp.task("default", ["watch"])