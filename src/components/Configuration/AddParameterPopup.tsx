import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  MenuItem,
  Box,
  Button,
  IconButton,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  open: boolean;
  onClose: () => void;
  onAdd: (data: any) => void;
  editData?: any | null;
}

const AddParameterPopup: React.FC<Props> = ({ open, onClose, onAdd, editData }) => {
  const [name, setName] = useState("");
  const [dataType, setDataType] = useState("");
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");
  const [dropdownValue, setDropdownValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [percentage, setPercentage] = useState("");
  const [integerValue, setIntegerValue] = useState("");
  const [integerError, setIntegerError] = useState(false);

  // Reset or preload fields on open
  useEffect(() => {
    if (!open) return;

    setName(editData?.name || "");
    setDataType(editData?.dataType || "");
    setMinValue(editData?.minValue || "");
    setMaxValue(editData?.maxValue || "");
    setDropdownValue(editData?.dropdownValue || "");
    setTextValue(editData?.textValue || "");
    setSelectedOptions(editData?.selectedOptions || []);
    setPercentage(editData?.percentage || "");
    setIntegerValue(editData?.integerValue || "");
  }, [open, editData]);

  const handleAdd = () => {
    if (dataType === "Integer" && integerValue.trim() === "") {
      setIntegerError(true);
      return;
    }

    onAdd({ name, dataType, minValue, maxValue, dropdownValue, textValue, selectedOptions, percentage, integerValue});

    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          "& .MuiDialogTitle-root + .MuiDialogContent-root": { pt: "6px" },
          borderRadius: "12px",
        },
      }}
    >
      <DialogTitle
        sx={{
          fontWeight: 700,
          fontSize: "18px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pb: 1,
        }}
      >
        {editData ? "Edit Parameter" : "Add Parameter"}
        <IconButton onClick={onClose} sx={{ width: "28px", height: "28px" }}>
          <CloseIcon sx={{ fontSize: "18px", color: "#7A7A7A" }} />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
        {/* Name */}
        <TextField
          label="Name"
          fullWidth
          size="small"
          value={name}
          onChange={(e) => setName(e.target.value)}
          InputLabelProps={{ shrink: true }}
          sx={{
            "& .MuiInputLabel-root.Mui-focused": { color: "#232323 !important"},
            "& .MuiInputLabel-root": { color: "#5F646F !important"},
            "& .MuiOutlinedInput-root": { paddingTop: "0", paddingBottom: "0", "& fieldset": { borderColor: "#CFD1D4" }, "&:hover fieldset": { borderColor: "#CFD1D4" }, "&.Mui-focused fieldset": { borderColor: "#CFD1D4 !important"}},
          }}
        />

        {/* Data Type */}
        <TextField
          label="Data Type"
          select
          fullWidth
          size="small"
          value={dataType}
          onChange={(e) => setDataType(e.target.value)}
          InputLabelProps={{ shrink: true }}
          sx={{
            "& .MuiInputLabel-root.Mui-focused": { color: "#232323 !important"},
            "& .MuiInputLabel-root": { color: "#5F646F !important"},
            "& .MuiOutlinedInput-root": { paddingTop: "0", paddingBottom: "0", "& fieldset": { borderColor: "#CFD1D4" }, "&:hover fieldset": { borderColor: "#CFD1D4" }, "&.Mui-focused fieldset": { borderColor: "#CFD1D4 !important"}},
          }}
        >
          <MenuItem value="Decimal">Decimal</MenuItem>
          <MenuItem value="Select">Multiple Selection</MenuItem>
          <MenuItem value="Text">Text</MenuItem>
          <MenuItem value="Dropdown">Dropdown</MenuItem>
          <MenuItem value="Percentage">Percentage</MenuItem>
          <MenuItem value="Integer">Integer</MenuItem>
        </TextField>

        {/* Decimal → Min & Max */}
        {dataType === "Decimal" && (
          <Box sx={{ display: "flex", gap: "16px" }}>
            <TextField
              label="Min °C"
              size="small"
              fullWidth
              value={minValue}
              onChange={(e) => setMinValue(e.target.value)}
              InputLabelProps={{ shrink: true }}
              sx={{
                "& .MuiInputLabel-root.Mui-focused": { color: "#232323 !important"},
                "& .MuiInputLabel-root": { color: "#5F646F !important"},
                "& .MuiOutlinedInput-root": { paddingTop: "0", paddingBottom: "0", "& fieldset": { borderColor: "#CFD1D4" }, "&:hover fieldset": { borderColor: "#CFD1D4" }, "&.Mui-focused fieldset": { borderColor: "#CFD1D4 !important"}},
              }}
            />
            <TextField
              label="Max °C"
              size="small"
              fullWidth
              value={maxValue}
              onChange={(e) => setMaxValue(e.target.value)}
              InputLabelProps={{ shrink: true }}
              sx={{
                "& .MuiInputLabel-root.Mui-focused": { color: "#232323 !important"},
                "& .MuiInputLabel-root": { color: "#5F646F !important"},
                "& .MuiOutlinedInput-root": { paddingTop: "0", paddingBottom: "0", "& fieldset": { borderColor: "#CFD1D4" }, "&:hover fieldset": { borderColor: "#CFD1D4" }, "&.Mui-focused fieldset": { borderColor: "#CFD1D4 !important"}},
              }}
            />
          </Box>
        )}

        {/* Select → Multiple checkboxes */}
        {dataType === "Select" && (
          <Box sx={{ display: "flex", gap: 3 }}>
            {["Option 1", "Option 2", "Option 3"].map((opt) => (
              <FormControlLabel
                key={opt}
                control={
                  <Checkbox
                    checked={selectedOptions.includes(opt)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedOptions([...selectedOptions, opt]);
                      } else {
                        setSelectedOptions(selectedOptions.filter((o) => o !== opt));
                      }
                    }}
                  />
                }
                label={opt}
              />
            ))}
          </Box>
        )}

        {/* Dropdown */}
        {dataType === "Dropdown" && (
          <TextField
            label="Select Option"
            select
            fullWidth
            size="small"
            value={dropdownValue}
            onChange={(e) => setDropdownValue(e.target.value)}
            InputLabelProps={{ shrink: true }}
            sx={{
              "& .MuiInputLabel-root.Mui-focused": { color: "#232323 !important"},
              "& .MuiInputLabel-root": { color: "#5F646F !important"},
              "& .MuiOutlinedInput-root": { paddingTop: "0", paddingBottom: "0", "& fieldset": { borderColor: "#CFD1D4" }, "&:hover fieldset": { borderColor: "#CFD1D4" }, "&.Mui-focused fieldset": { borderColor: "#CFD1D4 !important"}},
            }}
          >
            <MenuItem value="Drop1">Drop1</MenuItem>
            <MenuItem value="Drop2">Drop2</MenuItem>
            <MenuItem value="Drop3">Drop3</MenuItem>
          </TextField>
        )}

        {/* Text */}
        {dataType === "Text" && (
          <TextField
            label="Add Text Here"
            size="small"
            fullWidth
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
            InputLabelProps={{ shrink: true }}
            sx={{
              "& .MuiInputLabel-root.Mui-focused": { color: "#232323 !important"},
              "& .MuiInputLabel-root": { color: "#5F646F !important"},
              "& .MuiOutlinedInput-root": { paddingTop: "0", paddingBottom: "0", "& fieldset": { borderColor: "#CFD1D4" }, "&:hover fieldset": { borderColor: "#CFD1D4" }, "&.Mui-focused fieldset": { borderColor: "#CFD1D4 !important"}},
            }}
          />
        )}

        {/* Percentage */}
        {dataType === "Percentage" && (
          <TextField
            label="Percentage"
            fullWidth
            size="small"
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
            InputLabelProps={{ shrink: true }}
            sx={{
              "& .MuiInputLabel-root.Mui-focused": { color: "#232323 !important"},
              "& .MuiInputLabel-root": { color: "#5F646F !important"},
              "& .MuiOutlinedInput-root": { paddingTop: "0", paddingBottom: "0", "& fieldset": { borderColor: "#CFD1D4" }, "&:hover fieldset": { borderColor: "#CFD1D4" }, "&.Mui-focused fieldset": { borderColor: "#CFD1D4 !important"}},
            }}
          />
        )}

        {/* Integer */}
        {dataType === "Integer" && (
          <TextField
            label="Integer Value"
            fullWidth
            size="small"
            error={integerError}
            helperText={integerError ? "This field is required" : ""}
            value={integerValue}
            onChange={(e) => {
              setIntegerValue(e.target.value);
              setIntegerError(e.target.value.trim() === "");
            }}
            InputLabelProps={{ shrink: true }}
            sx={{
              "& .MuiInputLabel-root.Mui-focused": { color: "#232323 !important"},
              "& .MuiInputLabel-root": { color: "#5F646F !important"},
              "& .MuiOutlinedInput-root": { paddingTop: "0", paddingBottom: "0", "& fieldset": { borderColor: "#CFD1D4" }, "&:hover fieldset": { borderColor: "#CFD1D4" }, "&.Mui-focused fieldset": { borderColor: "#CFD1D4 !important"}},
            }}
          />
        )}

        {/* Buttons */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
          <Button
            variant="outlined"
            onClick={onClose}
            sx={{
              width: "120px",
              borderRadius: "10px",
              borderColor: "#505050",
              color: "#505050",
              textTransform: "none",
              "&:hover": { borderColor: "#505050", backgroundColor: "white" },
            }}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            onClick={handleAdd}
            sx={{
              width: "120px",
              borderRadius: "10px",
              background: "#383838",
              textTransform: "none",
              "&:hover": { background: "#2f2f2f" },
            }}
          >
            {editData ? "Update" : "Add"}
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default AddParameterPopup;