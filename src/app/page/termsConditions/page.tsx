import '../termsConditions/termsConditions.css'
import ComponentNav from "@/app/component/nav/page"
export default function PageTermsConditions(){
    return(
        <>
        <ComponentNav/>
        <div className="containerTerms">
        <div className="titleContainer">
            <h1>Terms & Conditions</h1>
            <hr />
        </div>
        <div className='contentContainer'>
       <div className="left"></div>
       <div className="right">
       <div className="item">
            <h3>Ποιοί είμαστε</h3>
                <div className='content'>
                <p><strong>Προτεινόμενο κείμενο:</strong>Η διεύθυνση της σελίδας είναι: https://monalia.gr.</p>
            </div>
        </div>
        <div className="item">
            <h3>Σχόλια</h3>
            <div className="content">     
                <p><strong>Προτεινόμενο κείμενο:</strong> Όταν οι επισκέπτες αφήνουν σχόλια στον ιστότοπο, συλλέγουμε τα δεδομένα που εμφανίζονται στη φόρμα σχολίων όπως επίσης τη διεύθυνση IP του επισκέπτη και τη συμβολοσειρά του χρήστη του προγράμματος περιήγησης ώστε να βοηθήσουμε στην ανίχνευση ανεπιθύμητων μηνυμάτων.</p>
                <p>Μια ανωνυμοποιημένη συμβολοσειρά που δημιουργήθηκε από τη διεύθυνση ηλεκτρονικού ταχυδρομείου σας (επίσης αποκαλούμενη “hash”) ενδέχεται να παρασχεθεί στην υπηρεσία Gravatar για να δει αν τη χρησιμοποιείτε. Η πολιτική απορρήτου της υπηρεσίας Gravatar διατίθεται εδώ: https://automattic.com/privacy/. Μετά την έγκριση του σχολίου σας, η εικόνα του προφίλ σας είναι ορατή στο κοινό μέσα στο πλαίσιο του σχολίου σας.</p>
            </div>
        </div>
        <div className="item">
            <h3>Πολυμέσα</h3>
            <div className="content">               
                <p><strong>Προτεινόμενο κείμενο:</strong> Εάν μεταφορτώνετε εικόνες στον ιστότοπο, θα πρέπει να αποφύγετε τη μεταφόρτωση εικόνων με ενσωματωμένα δεδομένα τοποθεσίας (EXIF GPS). Οι επισκέπτες του ιστότοπου μπορούν να πραγματοποιήσουν λήψη και εξαγωγή οποιωνδήποτε δεδομένων τοποθεσίας από εικόνες στον ιστότοπο.</p>
            </div>
        </div>
        <div className="item">
            <h3>Cookies</h3>
            <div className="content">        
                <p><strong>Προτεινόμενο κείμενο:</strong> Αν αφήσετε ένα σχόλιο στον ιστότοπό μας, μπορείτε να επιλέξετε να αποθηκεύσετε το όνομα, τη διεύθυνση ηλεκτρονικού ταχυδρομείου και τον ιστότοπό σας σε cookies. Αυτά είναι για την δική σας ευκολία, έτσι ώστε να μην χρειάζεται να συμπληρώσετε τα στοιχεία σας πάλι όταν αφήσετε ένα άλλο σχόλιο. Αυτά τα cookies θα διαρκέσουν για ένα έτος.</p>
               <p>Αν έχετε έναν λογαριασμό και συνδεθείτε στον ιστότοπο, θα δημιουργήσουμε ένα προσωρινό cookie για να προσδιορίσουμε αν ο φυλλομετρητής σας δέχεται cookies. Το cookie δεν περιέχει προσωπικές πληροφορίες και θα διαγράφει μόλις κλείσετε τον φυλλομετρητή σας.</p>
                <p>Όταν συνδεθείτε, θα δημιουργήσουμε επίσης διάφορα cookies για να αποθηκεύσετε τις πληροφορίες σύνδεσης και τις επιλογές οθόνης. Τα cookie εισόδου διαρκούν για δύο ημέρες και τα cookie επιλογών οθόνης διαρκούν για ένα χρόνο. Αν επιλέξετε “Να με θυμάσαι”, η σύνδεσή σας θα παραμείνει για δύο εβδομάδες. Αν αποσυνδεθείτε από το λογαριασμό σας, τα cookie σύνδεσης θα καταργηθούν.</p>
                <p>Εάν επεξεργαστείτε ή δημοσιεύσετε ένα άρθρο, ένα επιπλέον cookie θα αποθηκευτεί στο πρόγραμμα περιήγησης. Αυτό το cookie δεν περιλαμβάνει προσωπικά δεδομένα και υποδεικνύει απλώς το post ID του άρθρου που μόλις επεξεργαστήκατε. Λήγει μετά από 1 ημέρα.</p>

            </div>
        </div>
        <div className="item">
            <h3>Ενσωματωμένο περιεχόμενο από άλλους ιστότοπους</h3>
            <div className="content">              
                <p><strong>Προτεινόμενο κείμενο:</strong> Τα άρθρα σε αυτόν τον ιστότοπο ενδέχεται να περιλαμβάνουν ενσωματωμένο περιεχόμενο (π.χ. βίντεο, εικόνες, άρθρα κ.λπ.). Το ενσωματωμένο περιεχόμενο από άλλους ιστότοπους συμπεριφέρεται με τον ίδιο ακριβώς τρόπο όπως και αν ο επισκέπτης επισκέφθηκε τον άλλο ιστότοπο.</p>
                <p>Αυτοί οι ιστότοποι ενδέχεται να συλλέγουν δεδομένα για εσάς, χρησιμοποιούν cookies, ενσωματώνουν επιπλέον παρακολούθηση τρίτου μέρους και να παρακολουθούν την αλληλεπίδρασή σας με αυτό το περιλαμβανόμενο περιεχόμενο, συμπεριλαμβανομένης της ανίχνευσης της αλληλεπίδρασής σας με το περιλαμβανόμενο περιεχόμενο, εάν έχετε λογαριασμό και έχετε συνδεθεί στον συγκεκριμένο ιστότοπο.</p>
            </div>
        </div>
        <div className="item">
            <h3>Με ποιούς μοιραζόμαστε τα δεδομένα σας</h3>
           <div className="content">            
            <p> Αν<strong>Προτεινόμενο κείμενο:</strong> έχετε ζητήσει επαναπροσδιορισμό συνθηματικού, η διεύθυνση IP θα περιλαμβάνεται στο email επαναπροσδιορισμού.</p>
           </div>
        </div>
        <div className="item">
            <h3>Για πόσο καιρό διατηρούμε τα δεδομένα σας</h3>
            <div className="content">              
                <p><strong>Προτεινόμενο κείμενο:</strong> Εάν αφήσετε ένα σχόλιο, το σχόλιο και τα μεταδεδομένα του διατηρούνται επ’ αόριστον. Αυτό γίνεται ώστε να μπορούμε να αναγνωρίζουμε και να εγκρίνουμε αυτόματα τα σχόλια που ακολουθούν, αντί να τα κρατάμε σε ουρά συντονισμού.</p>
                <p>Για χρήστες που εγγράφονται στον ιστότοπο μας, αποθηκεύουμε επίσης τα προσωπικά δεδομένα που καταχωρούν στο προφίλ χρήστη τους. Όλοι οι χρήστες μπορούν να βλέπουν, να επεξεργάζονται ή να διαγράφουν τα προσωπικά δεδομένα τους ανά πάσα στιγμή (εκτός από το να μπορούν να αλλάξουν το όνομα χρήστη τους). Οι διαχειριστές του παρόντος ιστότοπου μπορεί επίσης να βλέπουν και να επεξεργάζονται αυτές τις πληροφορίες.</p>
            </div>
        </div>
        <div className="item">
            <h3>Ποια δικαιώματα έχετε στα δεδομένα σας</h3>
            <div className="content">
                <p><strong>Προτεινόμενο κείμενο:</strong> Εάν έχετε λογαριασμό σε αυτόν τον ιστότοπο ή έχετε αφήσει σχόλια, μπορείτε να ζητήσετε να λάβετε ένα εξαγόμενο αρχείο των προσωπικών δεδομένων που διατηρούμε για εσάς, συμπεριλαμβανομένων τυχόν δεδομένων που έχετε παράσχει σε εμάς. Μπορείτε επίσης να αιτηθείτε να διαγράψουμε τα προσωπικά δεδομένα που διατηρούμε για εσάς. Αυτό δεν περιλαμβάνει δεδομένα που είμαστε υποχρεωμένοι να τηρούμε για διοικητικούς, νομικούς ή λόγους ασφαλείας.</p>
            </div>
        </div>
        <div className="item">
            <h3>Πού αποστέλλονται τα δεδομένα σας</h3>
            <div className="content">
                <p><strong>Προτεινόμενο κείμενο:</strong>Τα σχόλια επισκεπτών ενδέχεται να ελέγχονται μέσω ενός αυτοματοποιημένου συστήματος ανεπιθύμητης αλληλογραφίας.</p>
            </div>
        </div>
       </div>
        </div>
        </div>
        </>
    )
}