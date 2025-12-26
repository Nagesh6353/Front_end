class FeedbackFormHandler {

    constructor() {
        this.form = document.getElementById("FeedbackForm");

        // Name
        this.Name = document.getElementById("name");
        this.NameErr = document.getElementById("nmerr");

        // Email
        this.Email = document.getElementById("email");
        this.EmailErr = document.getElementById("emerr");
        this.emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;

        // Event
        this.Event = document.getElementById("event");
        this.EventErr = document.getElementById("everr");

        // Rating
        this.Rating = document.getElementById("rating");
        this.RatingErr = document.getElementById("rterr");

        // Comments
        this.Comment = document.getElementById("comment");
        this.CommentErr = document.getElementById("cmerr");

        // Data show element
        this.output = document.getElementById("output");

        // addEventListener for Form Submit
        this.form.addEventListener("submit", e => {
            e.preventDefault();
            // this.validateForm();

            const isValid = this.validateForm();

            if (isValid) {
                alert("Form Submitted Successfully");
                this.showData();
                this.form.reset();
            }
        });

        // addEventListener for Form Input Field
        this.form.addEventListener("input", e => {
            this.validateField(e);
        });

        // addEventListener for Form Select Field
        this.form.addEventListener("change", e => {
            this.validateField(e);
        });
    }

    validateForm() {
        this.validateName();
        this.validateEmail();
        this.validateEvent();
        this.validateRating();
        this.validateComment();

        if (
            this.NameErr.innerHTML !== "" ||
            this.EmailErr.innerHTML !== "" ||
            this.EventErr.innerHTML !== "" ||
            this.RatingErr.innerHTML !== "" ||
            this.CommentErr.innerHTML !== ""
        ) {
            return false;
        }
        else {
            return true;
        }
    }

    validateField(e) {
        if (e.target.id === "name") {
            this.validateName();
        }

        if (e.target.id === "email") {
            this.validateEmail();
        }

        if (e.target.id === "event") {
            this.validateEvent();
        }

        if (e.target.id === "rating") {
            this.validateRating();
        }

        if (e.target.id === "comment") {
            this.validateComment();
        }
    }

    validateName() {
        if (this.Name.value.trim().length < 3) {
            this.NameErr.innerHTML = "Name must be at least 3 characters";
            this.Name.style.border = "2px solid red";
        } else {
            this.NameErr.innerHTML = "";
            this.Name.style.border = "2px solid green";
        }
    }

    validateEmail() {
        if (!this.emailRegex.test(this.Email.value.trim())) {
            this.EmailErr.innerHTML = "Please enter valid email";
            this.Email.style.border = "2px solid red";
        } else {
            this.EmailErr.innerHTML = "";
            this.Email.style.border = "2px solid green";
        }
    }

    validateEvent() {
        if (this.Event.value.trim() === "") {
            this.EventErr.innerHTML = "Please Select Event";
            this.Event.style.border = "2px solid red";
        } else {
            this.EventErr.innerHTML = "";
            this.Event.style.border = "2px solid green";
        }
    }

    validateRating() {
        if (this.Rating.value.trim() === "") {
            this.RatingErr.innerHTML = "Please Give Rating must be 1–5";
            this.Rating.style.border = "2px solid red";
        } else {
            this.RatingErr.innerHTML = "";
            this.Rating.style.border = "2px solid green";
        }
    }

    validateComment() {
        if (this.Comment.value.trim().length < 10) {
            this.CommentErr.innerHTML = "Comment must be at least 10 characters";
            this.Comment.style.border = "2px solid red";
        } else {
            this.CommentErr.innerHTML = "";
            this.Comment.style.border = "2px solid green";
        }
    }

    // Data show 
    showData() {
        this.output.innerHTML = `
        Name: ${this.Name.value} <br>
        Email: ${this.Email.value} <br>
        Event: ${this.Event.value} <br>
        Rating: ${this.Rating.value} <br>
        Comment: ${this.Comment.value}
    `;
    }



}

new FeedbackFormHandler();
