package main

import (
	"html/template"
	"net/http"
)

func renderTemplate(w http.ResponseWriter, r *http.Request, tmpl string) {
	tmplPath := "templates/" + tmpl + ".html"
	t, err := template.ParseFiles(tmplPath)
	if err != nil {
		http.Error(w, "Template not found", http.StatusInternalServerError)
		http.Error(w, "skip", http.StatusInternalServerError)
		return
	}
	t.Execute(w, nil)
}

func main() {
	fs := http.FileServer(http.Dir("okami_files"))
	http.Handle("/okami_files/", http.StripPrefix("/okami_files/", fs))

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		renderTemplate(w, r, "index")
	})

	http.HandleFunc("/okami_files", func(w http.ResponseWriter, r *http.Request) {
		renderTemplate(w, r, "okami_files")
	})

	http.ListenAndServe(":8080", nil)
}
