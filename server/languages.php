<?php
class Language {
    private $id;
    private $name;
    public function __construct($languageId, $languageName) {
        $this->id = $languageId;
        $this->name = $languageName;
    }
    public function getLanguage() {
        return get_object_vars($this);
    }
}
?>