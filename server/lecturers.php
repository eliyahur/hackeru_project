<?php
class Lecturer {
    private $id;
    private $name;
    private $email;
    private $languages;
    public function __construct($lecturerId, $lecturerName, $lecturerEmail, $lecturerLanguages){
        $this->id = $lecturerId;
        $this->name = $lecturerName;
        $this->email = $lecturerEmail;
        $this->languages = $lecturerLanguages;
    }
    public function getLecturer() {
        return get_object_vars($this);
    }
}
?>