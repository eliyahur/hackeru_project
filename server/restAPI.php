<?php
require_once('lecturers.php');
require_once('languages.php');
class restAPI {
    private $languages;
    private $lecturers;
    public function __construct() {
        $this->buildLanguagesList();
        $this->buildLecturersList();
    }
    private function buildLanguagesList() {
        $hardCodedLanguages = array(array(1,'PHP'),array(2,'Flutter'),array(3,'JavaScript'),array(4,'CSS3'));
        $tmp_languages = array();
        foreach ($hardCodedLanguages as $language) {
            $tmp_language = new Language($language[0],$language[1]);
            array_push($tmp_languages, $tmp_language->getLanguage());
        }
        $this->languages = $tmp_languages;
    }
    private function buildLecturersList() {
        $hardCodedLecturers = array(array(1, 'אלי רוטנברג', 'eli@eli.com',array(1,2,3)),array(2, 'אביעד כהנוף', 'aviad@k.com',array(2,3,4)),array(3, 'שלמה בן ציון', 'sds@sds.com',array(4)));
        $tmp_lecturers = array();
        foreach ($hardCodedLecturers as $lecturer) {
            $tmp_lecturer = new Lecturer($lecturer[0],$lecturer[1],$lecturer[2], $lecturer[3]);
            array_push($tmp_lecturers, $tmp_lecturer->getLecturer());
        }
        $this->lecturers = $tmp_lecturers;
    }
    public function getRestAPI() {
        return get_object_vars($this);
    }
}
$restAPI = new restAPI();
echo json_encode($restAPI->getRestAPI());
?>